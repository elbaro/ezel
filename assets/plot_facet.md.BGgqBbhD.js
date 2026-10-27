import{o,c as e,j as l,a as s,k as i,g as r,ae as a}from"./chunks/framework.DBosx3SP.js";const n=["src"],h=JSON.parse('{"title":"Facet","description":"","frontmatter":{},"headers":[],"relativePath":"plot/facet.md","filePath":"plot/facet.md","lastUpdated":1792997557000}'),d={name:"plot/facet.md"},g=Object.assign(d,{setup(A){return(k,t)=>(o(),e("div",null,[t[0]||(t[0]=l("h1",{id:"facet",tabindex:"-1"},[s("Facet "),l("a",{class:"header-anchor",href:"#facet","aria-label":'Permalink to "Facet"'},"​")],-1)),t[1]||(t[1]=l("p",null,[l("em",null,"Facet"),s(" templates a child Plot, expanding it into one panel per distinct value of a categorical variable.")],-1)),l("ezel-plot",{src:i(r)("/plots/facet.ezel"),style:{"aspect-ratio":"8 / 5"}},null,8,n),t[2]||(t[2]=a(`<p><code>Facet1</code> splits by a single variable; <code>Facet2</code> splits by two, laying panels out in rows and columns.</p><div class="facet-expand-diagram"><pre>Facet
╰─ Cartesian2
   ├─ Scatter
   ╰─ Bar</pre><div class="expand-arrow">Expand ──▶</div><pre>Facet
├─ Cartesian2
│  ├─ Scatter
│  ╰─ Bar
╰─ Cartesian2
   ├─ Scatter
   ╰─ Bar</pre></div><h2 id="creating-a-facet" tabindex="-1">Creating a Facet <a class="header-anchor" href="#creating-a-facet" aria-label="Permalink to &quot;Creating a Facet&quot;">​</a></h2><p><code>Facet1::new(facet_var, item, share_scale)</code> takes the variable to split by, the child Plot template, and whether panels share scales:</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> mut</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cell </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Cartesian2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cell</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add_geometry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> mut</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> geometry </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ezel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cartesian2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Scatter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    geometry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    geometry</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> facet </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Facet1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cell, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">with_data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data_frame);</span></span></code></pre></div><p>Panels stack horizontally by default; <code>with_direction(FacetDirection::Vertical)</code> stacks them vertically.</p><div><div class="d2-diagram"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-d2-version="v0.7.1" preserveAspectRatio="xMinYMin meet" viewBox="0 0 331 84" width="331" height="84"><svg class="d2-137744130 d2-svg" width="331" height="84" viewBox="-9 -9 331 84"><rect x="-9.000000" y="-9.000000" width="331.000000" height="84.000000" rx="0.000000" class=" fill-N7" stroke-width="0" /><style type="text/css"><![CDATA[
.d2-137744130 .text-bold {
	font-family: "d2-137744130-font-bold";
}
@font-face {
	font-family: d2-137744130-font-bold;
	src: url("data:application/font-woff;base64,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");
}]]></style><style type="text/css"><![CDATA[.shape {
  shape-rendering: geometricPrecision;
  stroke-linejoin: round;
}
.connection {
  stroke-linecap: round;
  stroke-linejoin: round;
}
.blend {
  mix-blend-mode: multiply;
  opacity: 0.5;
}

		.d2-137744130 .fill-N1{fill:#0A0F25;}
		.d2-137744130 .fill-N2{fill:#676C7E;}
		.d2-137744130 .fill-N3{fill:#9499AB;}
		.d2-137744130 .fill-N4{fill:#CFD2DD;}
		.d2-137744130 .fill-N5{fill:#DEE1EB;}
		.d2-137744130 .fill-N6{fill:#EEF1F8;}
		.d2-137744130 .fill-N7{fill:#FFFFFF;}
		.d2-137744130 .fill-B1{fill:#0D32B2;}
		.d2-137744130 .fill-B2{fill:#0D32B2;}
		.d2-137744130 .fill-B3{fill:#E3E9FD;}
		.d2-137744130 .fill-B4{fill:#E3E9FD;}
		.d2-137744130 .fill-B5{fill:#EDF0FD;}
		.d2-137744130 .fill-B6{fill:#F7F8FE;}
		.d2-137744130 .fill-AA2{fill:#4A6FF3;}
		.d2-137744130 .fill-AA4{fill:#EDF0FD;}
		.d2-137744130 .fill-AA5{fill:#F7F8FE;}
		.d2-137744130 .fill-AB4{fill:#EDF0FD;}
		.d2-137744130 .fill-AB5{fill:#F7F8FE;}
		.d2-137744130 .stroke-N1{stroke:#0A0F25;}
		.d2-137744130 .stroke-N2{stroke:#676C7E;}
		.d2-137744130 .stroke-N3{stroke:#9499AB;}
		.d2-137744130 .stroke-N4{stroke:#CFD2DD;}
		.d2-137744130 .stroke-N5{stroke:#DEE1EB;}
		.d2-137744130 .stroke-N6{stroke:#EEF1F8;}
		.d2-137744130 .stroke-N7{stroke:#FFFFFF;}
		.d2-137744130 .stroke-B1{stroke:#0D32B2;}
		.d2-137744130 .stroke-B2{stroke:#0D32B2;}
		.d2-137744130 .stroke-B3{stroke:#E3E9FD;}
		.d2-137744130 .stroke-B4{stroke:#E3E9FD;}
		.d2-137744130 .stroke-B5{stroke:#EDF0FD;}
		.d2-137744130 .stroke-B6{stroke:#F7F8FE;}
		.d2-137744130 .stroke-AA2{stroke:#4A6FF3;}
		.d2-137744130 .stroke-AA4{stroke:#EDF0FD;}
		.d2-137744130 .stroke-AA5{stroke:#F7F8FE;}
		.d2-137744130 .stroke-AB4{stroke:#EDF0FD;}
		.d2-137744130 .stroke-AB5{stroke:#F7F8FE;}
		.d2-137744130 .background-color-N1{background-color:#0A0F25;}
		.d2-137744130 .background-color-N2{background-color:#676C7E;}
		.d2-137744130 .background-color-N3{background-color:#9499AB;}
		.d2-137744130 .background-color-N4{background-color:#CFD2DD;}
		.d2-137744130 .background-color-N5{background-color:#DEE1EB;}
		.d2-137744130 .background-color-N6{background-color:#EEF1F8;}
		.d2-137744130 .background-color-N7{background-color:#FFFFFF;}
		.d2-137744130 .background-color-B1{background-color:#0D32B2;}
		.d2-137744130 .background-color-B2{background-color:#0D32B2;}
		.d2-137744130 .background-color-B3{background-color:#E3E9FD;}
		.d2-137744130 .background-color-B4{background-color:#E3E9FD;}
		.d2-137744130 .background-color-B5{background-color:#EDF0FD;}
		.d2-137744130 .background-color-B6{background-color:#F7F8FE;}
		.d2-137744130 .background-color-AA2{background-color:#4A6FF3;}
		.d2-137744130 .background-color-AA4{background-color:#EDF0FD;}
		.d2-137744130 .background-color-AA5{background-color:#F7F8FE;}
		.d2-137744130 .background-color-AB4{background-color:#EDF0FD;}
		.d2-137744130 .background-color-AB5{background-color:#F7F8FE;}
		.d2-137744130 .color-N1{color:#0A0F25;}
		.d2-137744130 .color-N2{color:#676C7E;}
		.d2-137744130 .color-N3{color:#9499AB;}
		.d2-137744130 .color-N4{color:#CFD2DD;}
		.d2-137744130 .color-N5{color:#DEE1EB;}
		.d2-137744130 .color-N6{color:#EEF1F8;}
		.d2-137744130 .color-N7{color:#FFFFFF;}
		.d2-137744130 .color-B1{color:#0D32B2;}
		.d2-137744130 .color-B2{color:#0D32B2;}
		.d2-137744130 .color-B3{color:#E3E9FD;}
		.d2-137744130 .color-B4{color:#E3E9FD;}
		.d2-137744130 .color-B5{color:#EDF0FD;}
		.d2-137744130 .color-B6{color:#F7F8FE;}
		.d2-137744130 .color-AA2{color:#4A6FF3;}
		.d2-137744130 .color-AA4{color:#EDF0FD;}
		.d2-137744130 .color-AA5{color:#F7F8FE;}
		.d2-137744130 .color-AB4{color:#EDF0FD;}
		.d2-137744130 .color-AB5{color:#F7F8FE;}.appendix text.text{fill:#0A0F25}.md{--color-fg-default:#0A0F25;--color-fg-muted:#676C7E;--color-fg-subtle:#9499AB;--color-canvas-default:#FFFFFF;--color-canvas-subtle:#EEF1F8;--color-border-default:#0D32B2;--color-border-muted:#0D32B2;--color-neutral-muted:#EEF1F8;--color-accent-fg:#0D32B2;--color-accent-emphasis:#0D32B2;--color-attention-subtle:#676C7E;--color-danger-fg:red;}.sketch-overlay-B1{fill:url(#streaks-darker-d2-137744130);mix-blend-mode:lighten}.sketch-overlay-B2{fill:url(#streaks-darker-d2-137744130);mix-blend-mode:lighten}.sketch-overlay-B3{fill:url(#streaks-bright-d2-137744130);mix-blend-mode:darken}.sketch-overlay-B4{fill:url(#streaks-bright-d2-137744130);mix-blend-mode:darken}.sketch-overlay-B5{fill:url(#streaks-bright-d2-137744130);mix-blend-mode:darken}.sketch-overlay-B6{fill:url(#streaks-bright-d2-137744130);mix-blend-mode:darken}.sketch-overlay-AA2{fill:url(#streaks-dark-d2-137744130);mix-blend-mode:overlay}.sketch-overlay-AA4{fill:url(#streaks-bright-d2-137744130);mix-blend-mode:darken}.sketch-overlay-AA5{fill:url(#streaks-bright-d2-137744130);mix-blend-mode:darken}.sketch-overlay-AB4{fill:url(#streaks-bright-d2-137744130);mix-blend-mode:darken}.sketch-overlay-AB5{fill:url(#streaks-bright-d2-137744130);mix-blend-mode:darken}.sketch-overlay-N1{fill:url(#streaks-darker-d2-137744130);mix-blend-mode:lighten}.sketch-overlay-N2{fill:url(#streaks-dark-d2-137744130);mix-blend-mode:overlay}.sketch-overlay-N3{fill:url(#streaks-normal-d2-137744130);mix-blend-mode:color-burn}.sketch-overlay-N4{fill:url(#streaks-normal-d2-137744130);mix-blend-mode:color-burn}.sketch-overlay-N5{fill:url(#streaks-bright-d2-137744130);mix-blend-mode:darken}.sketch-overlay-N6{fill:url(#streaks-bright-d2-137744130);mix-blend-mode:darken}.sketch-overlay-N7{fill:url(#streaks-bright-d2-137744130);mix-blend-mode:darken}.light-code{display: block}.dark-code{display: none}@media screen and (prefers-color-scheme:dark){
		.d2-137744130 .fill-N1{fill:#CDD6F4;}
		.d2-137744130 .fill-N2{fill:#BAC2DE;}
		.d2-137744130 .fill-N3{fill:#A6ADC8;}
		.d2-137744130 .fill-N4{fill:#585B70;}
		.d2-137744130 .fill-N5{fill:#45475A;}
		.d2-137744130 .fill-N6{fill:#313244;}
		.d2-137744130 .fill-N7{fill:#1E1E2E;}
		.d2-137744130 .fill-B1{fill:#CBA6f7;}
		.d2-137744130 .fill-B2{fill:#CBA6f7;}
		.d2-137744130 .fill-B3{fill:#6C7086;}
		.d2-137744130 .fill-B4{fill:#585B70;}
		.d2-137744130 .fill-B5{fill:#45475A;}
		.d2-137744130 .fill-B6{fill:#313244;}
		.d2-137744130 .fill-AA2{fill:#f38BA8;}
		.d2-137744130 .fill-AA4{fill:#45475A;}
		.d2-137744130 .fill-AA5{fill:#313244;}
		.d2-137744130 .fill-AB4{fill:#45475A;}
		.d2-137744130 .fill-AB5{fill:#313244;}
		.d2-137744130 .stroke-N1{stroke:#CDD6F4;}
		.d2-137744130 .stroke-N2{stroke:#BAC2DE;}
		.d2-137744130 .stroke-N3{stroke:#A6ADC8;}
		.d2-137744130 .stroke-N4{stroke:#585B70;}
		.d2-137744130 .stroke-N5{stroke:#45475A;}
		.d2-137744130 .stroke-N6{stroke:#313244;}
		.d2-137744130 .stroke-N7{stroke:#1E1E2E;}
		.d2-137744130 .stroke-B1{stroke:#CBA6f7;}
		.d2-137744130 .stroke-B2{stroke:#CBA6f7;}
		.d2-137744130 .stroke-B3{stroke:#6C7086;}
		.d2-137744130 .stroke-B4{stroke:#585B70;}
		.d2-137744130 .stroke-B5{stroke:#45475A;}
		.d2-137744130 .stroke-B6{stroke:#313244;}
		.d2-137744130 .stroke-AA2{stroke:#f38BA8;}
		.d2-137744130 .stroke-AA4{stroke:#45475A;}
		.d2-137744130 .stroke-AA5{stroke:#313244;}
		.d2-137744130 .stroke-AB4{stroke:#45475A;}
		.d2-137744130 .stroke-AB5{stroke:#313244;}
		.d2-137744130 .background-color-N1{background-color:#CDD6F4;}
		.d2-137744130 .background-color-N2{background-color:#BAC2DE;}
		.d2-137744130 .background-color-N3{background-color:#A6ADC8;}
		.d2-137744130 .background-color-N4{background-color:#585B70;}
		.d2-137744130 .background-color-N5{background-color:#45475A;}
		.d2-137744130 .background-color-N6{background-color:#313244;}
		.d2-137744130 .background-color-N7{background-color:#1E1E2E;}
		.d2-137744130 .background-color-B1{background-color:#CBA6f7;}
		.d2-137744130 .background-color-B2{background-color:#CBA6f7;}
		.d2-137744130 .background-color-B3{background-color:#6C7086;}
		.d2-137744130 .background-color-B4{background-color:#585B70;}
		.d2-137744130 .background-color-B5{background-color:#45475A;}
		.d2-137744130 .background-color-B6{background-color:#313244;}
		.d2-137744130 .background-color-AA2{background-color:#f38BA8;}
		.d2-137744130 .background-color-AA4{background-color:#45475A;}
		.d2-137744130 .background-color-AA5{background-color:#313244;}
		.d2-137744130 .background-color-AB4{background-color:#45475A;}
		.d2-137744130 .background-color-AB5{background-color:#313244;}
		.d2-137744130 .color-N1{color:#CDD6F4;}
		.d2-137744130 .color-N2{color:#BAC2DE;}
		.d2-137744130 .color-N3{color:#A6ADC8;}
		.d2-137744130 .color-N4{color:#585B70;}
		.d2-137744130 .color-N5{color:#45475A;}
		.d2-137744130 .color-N6{color:#313244;}
		.d2-137744130 .color-N7{color:#1E1E2E;}
		.d2-137744130 .color-B1{color:#CBA6f7;}
		.d2-137744130 .color-B2{color:#CBA6f7;}
		.d2-137744130 .color-B3{color:#6C7086;}
		.d2-137744130 .color-B4{color:#585B70;}
		.d2-137744130 .color-B5{color:#45475A;}
		.d2-137744130 .color-B6{color:#313244;}
		.d2-137744130 .color-AA2{color:#f38BA8;}
		.d2-137744130 .color-AA4{color:#45475A;}
		.d2-137744130 .color-AA5{color:#313244;}
		.d2-137744130 .color-AB4{color:#45475A;}
		.d2-137744130 .color-AB5{color:#313244;}.appendix text.text{fill:#CDD6F4}.md{--color-fg-default:#CDD6F4;--color-fg-muted:#BAC2DE;--color-fg-subtle:#A6ADC8;--color-canvas-default:#1E1E2E;--color-canvas-subtle:#313244;--color-border-default:#CBA6f7;--color-border-muted:#CBA6f7;--color-neutral-muted:#313244;--color-accent-fg:#CBA6f7;--color-accent-emphasis:#CBA6f7;--color-attention-subtle:#BAC2DE;--color-danger-fg:red;}.sketch-overlay-B1{fill:url(#streaks-normal-d2-137744130);mix-blend-mode:color-burn}.sketch-overlay-B2{fill:url(#streaks-normal-d2-137744130);mix-blend-mode:color-burn}.sketch-overlay-B3{fill:url(#streaks-dark-d2-137744130);mix-blend-mode:overlay}.sketch-overlay-B4{fill:url(#streaks-dark-d2-137744130);mix-blend-mode:overlay}.sketch-overlay-B5{fill:url(#streaks-darker-d2-137744130);mix-blend-mode:lighten}.sketch-overlay-B6{fill:url(#streaks-darker-d2-137744130);mix-blend-mode:lighten}.sketch-overlay-AA2{fill:url(#streaks-normal-d2-137744130);mix-blend-mode:color-burn}.sketch-overlay-AA4{fill:url(#streaks-darker-d2-137744130);mix-blend-mode:lighten}.sketch-overlay-AA5{fill:url(#streaks-darker-d2-137744130);mix-blend-mode:lighten}.sketch-overlay-AB4{fill:url(#streaks-darker-d2-137744130);mix-blend-mode:lighten}.sketch-overlay-AB5{fill:url(#streaks-darker-d2-137744130);mix-blend-mode:lighten}.sketch-overlay-N1{fill:url(#streaks-normal-d2-137744130);mix-blend-mode:color-burn}.sketch-overlay-N2{fill:url(#streaks-normal-d2-137744130);mix-blend-mode:color-burn}.sketch-overlay-N3{fill:url(#streaks-normal-d2-137744130);mix-blend-mode:color-burn}.sketch-overlay-N4{fill:url(#streaks-dark-d2-137744130);mix-blend-mode:overlay}.sketch-overlay-N5{fill:url(#streaks-darker-d2-137744130);mix-blend-mode:lighten}.sketch-overlay-N6{fill:url(#streaks-darker-d2-137744130);mix-blend-mode:lighten}.sketch-overlay-N7{fill:url(#streaks-darker-d2-137744130);mix-blend-mode:lighten}.light-code{display: none}.dark-code{display: block}}]]></style><g class="YQ=="><g class="shape" ><rect x="0.000000" y="0.000000" width="104.000000" height="66.000000" class=" stroke-B1 fill-B6" style="stroke-width:2;" /></g><text x="52.000000" y="38.500000" class="text-bold fill-N1" style="text-anchor:middle;font-size:16px">group=a</text></g><g class="Yg=="><g class="shape" ><rect x="104.000000" y="0.000000" width="105.000000" height="66.000000" class=" stroke-B1 fill-B6" style="stroke-width:2;" /></g><text x="156.500000" y="38.500000" class="text-bold fill-N1" style="text-anchor:middle;font-size:16px">group=b</text></g><g class="Yw=="><g class="shape" ><rect x="209.000000" y="0.000000" width="104.000000" height="66.000000" class=" stroke-B1 fill-B6" style="stroke-width:2;" /></g><text x="261.000000" y="38.500000" class="text-bold fill-N1" style="text-anchor:middle;font-size:16px">group=c</text></g><mask id="d2-137744130" maskUnits="userSpaceOnUse" x="-9" y="-9" width="331" height="84">
<rect x="-9" y="-9" width="331" height="84" fill="white"></rect>

</mask></svg></svg>
</div></div><h2 id="facet2" tabindex="-1">Facet2 <a class="header-anchor" href="#facet2" aria-label="Permalink to &quot;Facet2&quot;">​</a></h2><p><code>Facet2::new(row_var, col_var, item, share_scale)</code> splits the data by two variables and put them into a 2D layout.<br><code>with_skip_empty(true)</code> skips a cell with no data.</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> facet </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Facet2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;region&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;year&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cell, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">with_data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data_frame);</span></span></code></pre></div><div><div class="d2-diagram"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-d2-version="v0.7.1" preserveAspectRatio="xMinYMin meet" viewBox="0 0 279 150" width="279" height="150"><svg class="d2-165402081 d2-svg" width="279" height="150" viewBox="-9 -9 279 150"><rect x="-9.000000" y="-9.000000" width="279.000000" height="150.000000" rx="0.000000" class=" fill-N7" stroke-width="0" /><style type="text/css"><![CDATA[
.d2-165402081 .text-bold {
	font-family: "d2-165402081-font-bold";
}
@font-face {
	font-family: d2-165402081-font-bold;
	src: url("data:application/font-woff;base64,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");
}]]></style><style type="text/css"><![CDATA[.shape {
  shape-rendering: geometricPrecision;
  stroke-linejoin: round;
}
.connection {
  stroke-linecap: round;
  stroke-linejoin: round;
}
.blend {
  mix-blend-mode: multiply;
  opacity: 0.5;
}

		.d2-165402081 .fill-N1{fill:#0A0F25;}
		.d2-165402081 .fill-N2{fill:#676C7E;}
		.d2-165402081 .fill-N3{fill:#9499AB;}
		.d2-165402081 .fill-N4{fill:#CFD2DD;}
		.d2-165402081 .fill-N5{fill:#DEE1EB;}
		.d2-165402081 .fill-N6{fill:#EEF1F8;}
		.d2-165402081 .fill-N7{fill:#FFFFFF;}
		.d2-165402081 .fill-B1{fill:#0D32B2;}
		.d2-165402081 .fill-B2{fill:#0D32B2;}
		.d2-165402081 .fill-B3{fill:#E3E9FD;}
		.d2-165402081 .fill-B4{fill:#E3E9FD;}
		.d2-165402081 .fill-B5{fill:#EDF0FD;}
		.d2-165402081 .fill-B6{fill:#F7F8FE;}
		.d2-165402081 .fill-AA2{fill:#4A6FF3;}
		.d2-165402081 .fill-AA4{fill:#EDF0FD;}
		.d2-165402081 .fill-AA5{fill:#F7F8FE;}
		.d2-165402081 .fill-AB4{fill:#EDF0FD;}
		.d2-165402081 .fill-AB5{fill:#F7F8FE;}
		.d2-165402081 .stroke-N1{stroke:#0A0F25;}
		.d2-165402081 .stroke-N2{stroke:#676C7E;}
		.d2-165402081 .stroke-N3{stroke:#9499AB;}
		.d2-165402081 .stroke-N4{stroke:#CFD2DD;}
		.d2-165402081 .stroke-N5{stroke:#DEE1EB;}
		.d2-165402081 .stroke-N6{stroke:#EEF1F8;}
		.d2-165402081 .stroke-N7{stroke:#FFFFFF;}
		.d2-165402081 .stroke-B1{stroke:#0D32B2;}
		.d2-165402081 .stroke-B2{stroke:#0D32B2;}
		.d2-165402081 .stroke-B3{stroke:#E3E9FD;}
		.d2-165402081 .stroke-B4{stroke:#E3E9FD;}
		.d2-165402081 .stroke-B5{stroke:#EDF0FD;}
		.d2-165402081 .stroke-B6{stroke:#F7F8FE;}
		.d2-165402081 .stroke-AA2{stroke:#4A6FF3;}
		.d2-165402081 .stroke-AA4{stroke:#EDF0FD;}
		.d2-165402081 .stroke-AA5{stroke:#F7F8FE;}
		.d2-165402081 .stroke-AB4{stroke:#EDF0FD;}
		.d2-165402081 .stroke-AB5{stroke:#F7F8FE;}
		.d2-165402081 .background-color-N1{background-color:#0A0F25;}
		.d2-165402081 .background-color-N2{background-color:#676C7E;}
		.d2-165402081 .background-color-N3{background-color:#9499AB;}
		.d2-165402081 .background-color-N4{background-color:#CFD2DD;}
		.d2-165402081 .background-color-N5{background-color:#DEE1EB;}
		.d2-165402081 .background-color-N6{background-color:#EEF1F8;}
		.d2-165402081 .background-color-N7{background-color:#FFFFFF;}
		.d2-165402081 .background-color-B1{background-color:#0D32B2;}
		.d2-165402081 .background-color-B2{background-color:#0D32B2;}
		.d2-165402081 .background-color-B3{background-color:#E3E9FD;}
		.d2-165402081 .background-color-B4{background-color:#E3E9FD;}
		.d2-165402081 .background-color-B5{background-color:#EDF0FD;}
		.d2-165402081 .background-color-B6{background-color:#F7F8FE;}
		.d2-165402081 .background-color-AA2{background-color:#4A6FF3;}
		.d2-165402081 .background-color-AA4{background-color:#EDF0FD;}
		.d2-165402081 .background-color-AA5{background-color:#F7F8FE;}
		.d2-165402081 .background-color-AB4{background-color:#EDF0FD;}
		.d2-165402081 .background-color-AB5{background-color:#F7F8FE;}
		.d2-165402081 .color-N1{color:#0A0F25;}
		.d2-165402081 .color-N2{color:#676C7E;}
		.d2-165402081 .color-N3{color:#9499AB;}
		.d2-165402081 .color-N4{color:#CFD2DD;}
		.d2-165402081 .color-N5{color:#DEE1EB;}
		.d2-165402081 .color-N6{color:#EEF1F8;}
		.d2-165402081 .color-N7{color:#FFFFFF;}
		.d2-165402081 .color-B1{color:#0D32B2;}
		.d2-165402081 .color-B2{color:#0D32B2;}
		.d2-165402081 .color-B3{color:#E3E9FD;}
		.d2-165402081 .color-B4{color:#E3E9FD;}
		.d2-165402081 .color-B5{color:#EDF0FD;}
		.d2-165402081 .color-B6{color:#F7F8FE;}
		.d2-165402081 .color-AA2{color:#4A6FF3;}
		.d2-165402081 .color-AA4{color:#EDF0FD;}
		.d2-165402081 .color-AA5{color:#F7F8FE;}
		.d2-165402081 .color-AB4{color:#EDF0FD;}
		.d2-165402081 .color-AB5{color:#F7F8FE;}.appendix text.text{fill:#0A0F25}.md{--color-fg-default:#0A0F25;--color-fg-muted:#676C7E;--color-fg-subtle:#9499AB;--color-canvas-default:#FFFFFF;--color-canvas-subtle:#EEF1F8;--color-border-default:#0D32B2;--color-border-muted:#0D32B2;--color-neutral-muted:#EEF1F8;--color-accent-fg:#0D32B2;--color-accent-emphasis:#0D32B2;--color-attention-subtle:#676C7E;--color-danger-fg:red;}.sketch-overlay-B1{fill:url(#streaks-darker-d2-165402081);mix-blend-mode:lighten}.sketch-overlay-B2{fill:url(#streaks-darker-d2-165402081);mix-blend-mode:lighten}.sketch-overlay-B3{fill:url(#streaks-bright-d2-165402081);mix-blend-mode:darken}.sketch-overlay-B4{fill:url(#streaks-bright-d2-165402081);mix-blend-mode:darken}.sketch-overlay-B5{fill:url(#streaks-bright-d2-165402081);mix-blend-mode:darken}.sketch-overlay-B6{fill:url(#streaks-bright-d2-165402081);mix-blend-mode:darken}.sketch-overlay-AA2{fill:url(#streaks-dark-d2-165402081);mix-blend-mode:overlay}.sketch-overlay-AA4{fill:url(#streaks-bright-d2-165402081);mix-blend-mode:darken}.sketch-overlay-AA5{fill:url(#streaks-bright-d2-165402081);mix-blend-mode:darken}.sketch-overlay-AB4{fill:url(#streaks-bright-d2-165402081);mix-blend-mode:darken}.sketch-overlay-AB5{fill:url(#streaks-bright-d2-165402081);mix-blend-mode:darken}.sketch-overlay-N1{fill:url(#streaks-darker-d2-165402081);mix-blend-mode:lighten}.sketch-overlay-N2{fill:url(#streaks-dark-d2-165402081);mix-blend-mode:overlay}.sketch-overlay-N3{fill:url(#streaks-normal-d2-165402081);mix-blend-mode:color-burn}.sketch-overlay-N4{fill:url(#streaks-normal-d2-165402081);mix-blend-mode:color-burn}.sketch-overlay-N5{fill:url(#streaks-bright-d2-165402081);mix-blend-mode:darken}.sketch-overlay-N6{fill:url(#streaks-bright-d2-165402081);mix-blend-mode:darken}.sketch-overlay-N7{fill:url(#streaks-bright-d2-165402081);mix-blend-mode:darken}.light-code{display: block}.dark-code{display: none}@media screen and (prefers-color-scheme:dark){
		.d2-165402081 .fill-N1{fill:#CDD6F4;}
		.d2-165402081 .fill-N2{fill:#BAC2DE;}
		.d2-165402081 .fill-N3{fill:#A6ADC8;}
		.d2-165402081 .fill-N4{fill:#585B70;}
		.d2-165402081 .fill-N5{fill:#45475A;}
		.d2-165402081 .fill-N6{fill:#313244;}
		.d2-165402081 .fill-N7{fill:#1E1E2E;}
		.d2-165402081 .fill-B1{fill:#CBA6f7;}
		.d2-165402081 .fill-B2{fill:#CBA6f7;}
		.d2-165402081 .fill-B3{fill:#6C7086;}
		.d2-165402081 .fill-B4{fill:#585B70;}
		.d2-165402081 .fill-B5{fill:#45475A;}
		.d2-165402081 .fill-B6{fill:#313244;}
		.d2-165402081 .fill-AA2{fill:#f38BA8;}
		.d2-165402081 .fill-AA4{fill:#45475A;}
		.d2-165402081 .fill-AA5{fill:#313244;}
		.d2-165402081 .fill-AB4{fill:#45475A;}
		.d2-165402081 .fill-AB5{fill:#313244;}
		.d2-165402081 .stroke-N1{stroke:#CDD6F4;}
		.d2-165402081 .stroke-N2{stroke:#BAC2DE;}
		.d2-165402081 .stroke-N3{stroke:#A6ADC8;}
		.d2-165402081 .stroke-N4{stroke:#585B70;}
		.d2-165402081 .stroke-N5{stroke:#45475A;}
		.d2-165402081 .stroke-N6{stroke:#313244;}
		.d2-165402081 .stroke-N7{stroke:#1E1E2E;}
		.d2-165402081 .stroke-B1{stroke:#CBA6f7;}
		.d2-165402081 .stroke-B2{stroke:#CBA6f7;}
		.d2-165402081 .stroke-B3{stroke:#6C7086;}
		.d2-165402081 .stroke-B4{stroke:#585B70;}
		.d2-165402081 .stroke-B5{stroke:#45475A;}
		.d2-165402081 .stroke-B6{stroke:#313244;}
		.d2-165402081 .stroke-AA2{stroke:#f38BA8;}
		.d2-165402081 .stroke-AA4{stroke:#45475A;}
		.d2-165402081 .stroke-AA5{stroke:#313244;}
		.d2-165402081 .stroke-AB4{stroke:#45475A;}
		.d2-165402081 .stroke-AB5{stroke:#313244;}
		.d2-165402081 .background-color-N1{background-color:#CDD6F4;}
		.d2-165402081 .background-color-N2{background-color:#BAC2DE;}
		.d2-165402081 .background-color-N3{background-color:#A6ADC8;}
		.d2-165402081 .background-color-N4{background-color:#585B70;}
		.d2-165402081 .background-color-N5{background-color:#45475A;}
		.d2-165402081 .background-color-N6{background-color:#313244;}
		.d2-165402081 .background-color-N7{background-color:#1E1E2E;}
		.d2-165402081 .background-color-B1{background-color:#CBA6f7;}
		.d2-165402081 .background-color-B2{background-color:#CBA6f7;}
		.d2-165402081 .background-color-B3{background-color:#6C7086;}
		.d2-165402081 .background-color-B4{background-color:#585B70;}
		.d2-165402081 .background-color-B5{background-color:#45475A;}
		.d2-165402081 .background-color-B6{background-color:#313244;}
		.d2-165402081 .background-color-AA2{background-color:#f38BA8;}
		.d2-165402081 .background-color-AA4{background-color:#45475A;}
		.d2-165402081 .background-color-AA5{background-color:#313244;}
		.d2-165402081 .background-color-AB4{background-color:#45475A;}
		.d2-165402081 .background-color-AB5{background-color:#313244;}
		.d2-165402081 .color-N1{color:#CDD6F4;}
		.d2-165402081 .color-N2{color:#BAC2DE;}
		.d2-165402081 .color-N3{color:#A6ADC8;}
		.d2-165402081 .color-N4{color:#585B70;}
		.d2-165402081 .color-N5{color:#45475A;}
		.d2-165402081 .color-N6{color:#313244;}
		.d2-165402081 .color-N7{color:#1E1E2E;}
		.d2-165402081 .color-B1{color:#CBA6f7;}
		.d2-165402081 .color-B2{color:#CBA6f7;}
		.d2-165402081 .color-B3{color:#6C7086;}
		.d2-165402081 .color-B4{color:#585B70;}
		.d2-165402081 .color-B5{color:#45475A;}
		.d2-165402081 .color-B6{color:#313244;}
		.d2-165402081 .color-AA2{color:#f38BA8;}
		.d2-165402081 .color-AA4{color:#45475A;}
		.d2-165402081 .color-AA5{color:#313244;}
		.d2-165402081 .color-AB4{color:#45475A;}
		.d2-165402081 .color-AB5{color:#313244;}.appendix text.text{fill:#CDD6F4}.md{--color-fg-default:#CDD6F4;--color-fg-muted:#BAC2DE;--color-fg-subtle:#A6ADC8;--color-canvas-default:#1E1E2E;--color-canvas-subtle:#313244;--color-border-default:#CBA6f7;--color-border-muted:#CBA6f7;--color-neutral-muted:#313244;--color-accent-fg:#CBA6f7;--color-accent-emphasis:#CBA6f7;--color-attention-subtle:#BAC2DE;--color-danger-fg:red;}.sketch-overlay-B1{fill:url(#streaks-normal-d2-165402081);mix-blend-mode:color-burn}.sketch-overlay-B2{fill:url(#streaks-normal-d2-165402081);mix-blend-mode:color-burn}.sketch-overlay-B3{fill:url(#streaks-dark-d2-165402081);mix-blend-mode:overlay}.sketch-overlay-B4{fill:url(#streaks-dark-d2-165402081);mix-blend-mode:overlay}.sketch-overlay-B5{fill:url(#streaks-darker-d2-165402081);mix-blend-mode:lighten}.sketch-overlay-B6{fill:url(#streaks-darker-d2-165402081);mix-blend-mode:lighten}.sketch-overlay-AA2{fill:url(#streaks-normal-d2-165402081);mix-blend-mode:color-burn}.sketch-overlay-AA4{fill:url(#streaks-darker-d2-165402081);mix-blend-mode:lighten}.sketch-overlay-AA5{fill:url(#streaks-darker-d2-165402081);mix-blend-mode:lighten}.sketch-overlay-AB4{fill:url(#streaks-darker-d2-165402081);mix-blend-mode:lighten}.sketch-overlay-AB5{fill:url(#streaks-darker-d2-165402081);mix-blend-mode:lighten}.sketch-overlay-N1{fill:url(#streaks-normal-d2-165402081);mix-blend-mode:color-burn}.sketch-overlay-N2{fill:url(#streaks-normal-d2-165402081);mix-blend-mode:color-burn}.sketch-overlay-N3{fill:url(#streaks-normal-d2-165402081);mix-blend-mode:color-burn}.sketch-overlay-N4{fill:url(#streaks-dark-d2-165402081);mix-blend-mode:overlay}.sketch-overlay-N5{fill:url(#streaks-darker-d2-165402081);mix-blend-mode:lighten}.sketch-overlay-N6{fill:url(#streaks-darker-d2-165402081);mix-blend-mode:lighten}.sketch-overlay-N7{fill:url(#streaks-darker-d2-165402081);mix-blend-mode:lighten}.light-code{display: none}.dark-code{display: block}}]]></style><g class="cjF5MQ=="><g class="shape" ><rect x="0.000000" y="0.000000" width="87.000000" height="66.000000" class=" stroke-B1 fill-B6" style="stroke-width:2;" /></g><text x="43.500000" y="38.500000" class="text-bold fill-N1" style="text-anchor:middle;font-size:16px">R1, Y1</text></g><g class="cjF5Mg=="><g class="shape" ><rect x="87.000000" y="0.000000" width="87.000000" height="66.000000" class=" stroke-B1 fill-B6" style="stroke-width:2;" /></g><text x="130.500000" y="38.500000" class="text-bold fill-N1" style="text-anchor:middle;font-size:16px">R1, Y2</text></g><g class="cjF5Mw=="><g class="shape" ><rect x="174.000000" y="0.000000" width="87.000000" height="66.000000" class=" stroke-B1 fill-B6" style="stroke-width:2;" /></g><text x="217.500000" y="38.500000" class="text-bold fill-N1" style="text-anchor:middle;font-size:16px">R1, Y3</text></g><g class="cjJ5MQ=="><g class="shape" ><rect x="0.000000" y="66.000000" width="87.000000" height="66.000000" class=" stroke-B1 fill-B6" style="stroke-width:2;" /></g><text x="43.500000" y="104.500000" class="text-bold fill-N1" style="text-anchor:middle;font-size:16px">R2, Y1</text></g><g class="cjJ5Mg=="><g class="shape" ><rect x="87.000000" y="66.000000" width="87.000000" height="66.000000" class=" stroke-B1 fill-B6" style="stroke-width:2;" /></g><text x="130.500000" y="104.500000" class="text-bold fill-N1" style="text-anchor:middle;font-size:16px">R2, Y2</text></g><g class="cjJ5Mw=="><g class="shape" ><rect x="174.000000" y="66.000000" width="87.000000" height="66.000000" class=" stroke-B1 fill-B6" style="stroke-width:2;" /></g><text x="217.500000" y="104.500000" class="text-bold fill-N1" style="text-anchor:middle;font-size:16px">R2, Y3</text></g><mask id="d2-165402081" maskUnits="userSpaceOnUse" x="-9" y="-9" width="279" height="150">
<rect x="-9" y="-9" width="279" height="150" fill="white"></rect>

</mask></svg></svg>
</div></div><h2 id="scale-sharing" tabindex="-1">Scale Sharing <a class="header-anchor" href="#scale-sharing" aria-label="Permalink to &quot;Scale Sharing&quot;">​</a></h2><p>With <code>share_scale = true</code>, every panel shares the same scale instances: the same range, ticks, and zoom. With <code>false</code>, each panel scales to its own data and zooms independently.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># TODO: insert zooming webp</span></span></code></pre></div><h2 id="panel-titles" tabindex="-1">Panel Titles <a class="header-anchor" href="#panel-titles" aria-label="Permalink to &quot;Panel Titles&quot;">​</a></h2><p><code>with_panel_title</code> (<code>Facet1</code>) / <code>with_row_title</code> and <code>with_col_title</code> (<code>Facet2</code>) reserve a strip labeling each panel with its facet value:</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> facet </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Facet1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cell, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">with_panel_title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FacetPanelTitle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        align_x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        align_y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// strip above the panel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> label_style,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span></code></pre></div><h2 id="spacing" tabindex="-1">Spacing <a class="header-anchor" href="#spacing" aria-label="Permalink to &quot;Spacing&quot;">​</a></h2><p><code>with_gap</code> sets the spacing between adjacent panels; <code>with_separator</code> draws a line in the gap:</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> facet </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Facet1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cell, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">with_gap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Logical</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">with_separator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FacetSeparator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        thickness</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Logical</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rgb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span></code></pre></div>`,20))]))}});export{h as __pageData,g as default};
