import{_ as s,o as a,c as p,ae as e}from"./chunks/framework.DBosx3SP.js";const g=JSON.parse('{"title":"Change Detection","description":"","frontmatter":{},"headers":[],"relativePath":"dx/change-detection.md","filePath":"dx/change-detection.md","lastUpdated":1792996843000}'),l={name:"dx/change-detection.md"};function t(i,n,c,o,r,d){return a(),p("div",null,[...n[0]||(n[0]=[e(`<h1 id="change-detection" tabindex="-1">Change Detection <a class="header-anchor" href="#change-detection" aria-label="Permalink to &quot;Change Detection&quot;">​</a></h1><p>An automatic change detection is expensive.<br> A detection by ObjectId is cheap.</p><p>Split changes into 2:</p><ol><li>Frequent Changes</li></ol><ul><li>Geometry Addition/Removal</li><li>Geometry Attribute Update</li><li>Interaction Object (highlights, outlines, animations)</li></ul><ol start="2"><li>Infrequent Changes</li></ol><ul><li>Theme Change</li><li>Style Change</li></ul><p>For 1, every frame render reads the geometry attributes.<br> For 2, the style overrides are sparse. How can we cache the style without hashing every override?</p><p>What if - make the style a dataflow node</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Theme {</span></span>
<span class="line"><span>  title: FontStyle</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FontStyle {</span></span>
<span class="line"><span>  size: f32,</span></span>
<span class="line"><span>  color: Color,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FontOptions {</span></span>
<span class="line"><span>  size: Option&lt;f32&gt;,</span></span>
<span class="line"><span>  color: Option&lt;Color&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static OBJECT_ID: AtomicU64 = ..;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object&lt;FontOptions&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct Object&lt;T&gt; {</span></span>
<span class="line"><span>  id: ObjectId,</span></span>
<span class="line"><span>  inner: T,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl&lt;T&gt; for Object&lt;T&gt; {</span></span>
<span class="line"><span>  fn update(&amp;mut self, closure: FnMut) -&gt; crate::Result {</span></span>
<span class="line"><span>    self.id = Default::default();</span></span>
<span class="line"><span>    closure(self.inner)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl Deref for Object&lt;T&gt; { .. }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct Line {</span></span>
<span class="line"><span>  style: Option&lt;Object&lt;LineOptions&gt;&gt;,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>line.style.update(|opts| {</span></span>
<span class="line"><span>  opts.size = 10.0;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1</span></span>
<span class="line"><span>line.style = Some(obj!(LineOptions {</span></span>
<span class="line"><span>  size: 10.0,</span></span>
<span class="line"><span>}));</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2</span></span>
<span class="line"><span>line.style = Some(Object::new(LineOptions {</span></span>
<span class="line"><span>  size: 10.0,</span></span>
<span class="line"><span>  ..Default::Default()</span></span>
<span class="line"><span>}));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3</span></span>
<span class="line"><span>line.style = LineOptions {</span></span>
<span class="line"><span>  size: 10.0,</span></span>
<span class="line"><span>  ..Default::default()</span></span>
<span class="line"><span>}.into_some_object()</span></span></code></pre></div><p>Then, when rendering a geometry Line,</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// node type: LineStyleOverride</span></span>
<span class="line"><span>// node hash: theme.id and Object&lt;LineOptions&gt;::id</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LineStyleOverride {</span></span>
<span class="line"><span>  theme: Theme, // assuming Theme internally has Arc&lt;&gt;</span></span>
<span class="line"><span>  style: Object&lt;LineOptions&gt;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Or we can even make this generic, by implementing a trait for LineOptions</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>StyleOverride&lt;StyleT: trait Style&gt; {</span></span>
<span class="line"><span>  theme: Theme,</span></span>
<span class="line"><span>  override: Object&lt;StyleT::Override&gt;,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn op_implementation(&amp;self) {</span></span>
<span class="line"><span>  let original: &amp;StyleT = StyleT::extract(&amp;self.theme);</span></span>
<span class="line"><span>  let new_style = original.override(self.override);</span></span>
<span class="line"><span>  // store new_style as a node state somewhere</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,14)])])}const m=s(l,[["render",t]]);export{g as __pageData,m as default};
