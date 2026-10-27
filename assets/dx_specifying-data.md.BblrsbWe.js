import{_ as a,o as n,c as i,ae as p}from"./chunks/framework.DBosx3SP.js";const o=JSON.parse('{"title":"Specifying Data","description":"","frontmatter":{},"headers":[],"relativePath":"dx/specifying-data.md","filePath":"dx/specifying-data.md","lastUpdated":1792899449000}'),e={name:"dx/specifying-data.md"};function l(t,s,h,r,d,k){return n(),i("div",null,[...s[0]||(s[0]=[p(`<h1 id="specifying-data" tabindex="-1">Specifying Data <a class="header-anchor" href="#specifying-data" aria-label="Permalink to &quot;Specifying Data&quot;">​</a></h1><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;col1&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;col2&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;col1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;col2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x_series,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y_series,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>These three cases are represented as</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>enum CoordAttribute {</span></span>
<span class="line"><span>  Array(Arc&lt;[f64]&gt;),</span></span>
<span class="line"><span>  Column(String),</span></span>
<span class="line"><span>  Node(Node&lt;[f64]&gt;),</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="numericarray-vs-arc-f64" tabindex="-1">NumericArray vs Arc&lt;[f64]&gt; <a class="header-anchor" href="#numericarray-vs-arc-f64" aria-label="Permalink to &quot;NumericArray vs Arc&lt;[f64]&gt;&quot;">​</a></h2><p>?</p><h2 id="numericseries-vs-node-arc-f64" tabindex="-1">NumericSeries vs Node&lt;Arc&lt;[f64]&gt;&gt; <a class="header-anchor" href="#numericseries-vs-node-arc-f64" aria-label="Permalink to &quot;NumericSeries vs Node&lt;Arc&lt;[f64]&gt;&gt;&quot;">​</a></h2><p>?</p><h2 id="serializing-plot-with-dataflow" tabindex="-1">Serializing Plot with dataflow <a class="header-anchor" href="#serializing-plot-with-dataflow" aria-label="Permalink to &quot;Serializing Plot with dataflow&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let graph = Graph::..</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plot {</span></span>
<span class="line"><span>  x: x_node,</span></span>
<span class="line"><span>  y: y_node,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>serialize(plot, graph)</span></span></code></pre></div><p>is serialized to</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Plot {</span></span>
<span class="line"><span>  x: NodeId(1),</span></span>
<span class="line"><span>  y: NodeId(2),</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Graph {</span></span>
<span class="line"><span>  1: ...</span></span>
<span class="line"><span>  2: ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>struct Node {<br> graph: Graph,<br> node_id: NodeId,<br> }</p><h2 id="probably-over-engineered-patterns" tabindex="-1">Probably over-engineered patterns <a class="header-anchor" href="#probably-over-engineered-patterns" aria-label="Permalink to &quot;Probably over-engineered patterns&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Plot {</span></span>
<span class="line"><span>  data: {</span></span>
<span class="line"><span>      &quot;col1&quot;: x_node,</span></span>
<span class="line"><span>      &quot;col2&quot;: y_node,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>-&gt; The series nodes can be used in place of <code>CoordAttribute::Column</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Plot {</span></span>
<span class="line"><span>  data: dataframe_node</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>-&gt; The series nodes can be used in place of <code>CoordAttribute::Column</code></p><p>NumericScalar, TemporalScalar<br> -&gt; Just use f64, Timestamp</p>`,19)])])}const g=a(e,[["render",l]]);export{o as __pageData,g as default};
