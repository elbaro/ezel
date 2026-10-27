import{_ as e,o as A,c as o,ae as l}from"./chunks/framework.DBosx3SP.js";const h=JSON.parse('{"title":"LLM Policy","description":"","frontmatter":{},"headers":[],"relativePath":"about/llm-policy.md","filePath":"about/llm-policy.md","lastUpdated":1793029685000}'),r={name:"about/llm-policy.md"};function s(d,t,n,a,i,c){return A(),o("div",null,[...t[0]||(t[0]=[l(`<h1 id="llm-policy" tabindex="-1">LLM Policy <a class="header-anchor" href="#llm-policy" aria-label="Permalink to &quot;LLM Policy&quot;">​</a></h1><h2 id="_1-policy" tabindex="-1">1. Policy <a class="header-anchor" href="#_1-policy" aria-label="Permalink to &quot;1. Policy&quot;">​</a></h2><p>Contributors are expected to follow <a href="https://forge.rust-lang.org/policies/llm-usage.html" target="_blank" rel="noreferrer">the LLM policy of The Rust Programming Language</a>.</p><p>In addition, LLMs are allowed in</p><ul><li>Artworks such as logo and themes, where the output can be checked easily by the maintainer</li><li>Discovery of useful researches (published papers, performance experiments, HCI demos) with disclosure</li></ul><p>The maintainer often adds experimental components with disclosure (see below) and uses an LLM for self-reviewed trivial changes without disclosure.</p><h2 id="_2-current-usages" tabindex="-1">2. Current Usages <a class="header-anchor" href="#_2-current-usages" aria-label="Permalink to &quot;2. Current Usages&quot;">​</a></h2><p>Ezel uses LLM in</p><ul><li>Surveying research papers in Computer Graphics, HCI, Vision Science, etc.</li><li>Drawing the logo and colorbars for the documentation site</li><li>Collecting public themes, color schemes and example datasets</li><li>Experimental Components</li></ul><h2 id="_3-experimental-components" tabindex="-1">3. Experimental Components <a class="header-anchor" href="#_3-experimental-components" aria-label="Permalink to &quot;3. Experimental Components&quot;">​</a></h2><p>Ezel does not trust raw AI output. However the designs of some components are not finalized yet. Their current implementations can be thrown away next day. To avoid premature optimization, they are filled with placeholder implementations, and Ezel track which components are experimental.</p><div><div class="d2-diagram"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-d2-version="v0.7.1" preserveAspectRatio="xMinYMin meet" viewBox="0 0 1224 634"><svg class="d2-3631132080 d2-svg" width="1224" height="634" viewBox="-9 -9 1224 634"><rect x="-9.000000" y="-9.000000" width="1224.000000" height="634.000000" rx="0.000000" class=" fill-N7" stroke-width="0" /><style type="text/css"><![CDATA[
.d2-3631132080 .text {
	font-family: "d2-3631132080-font-regular";
}
@font-face {
	font-family: d2-3631132080-font-regular;
	src: url("data:application/font-woff;base64,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");
}
.d2-3631132080 .text-bold {
	font-family: "d2-3631132080-font-bold";
}
@font-face {
	font-family: d2-3631132080-font-bold;
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

		.d2-3631132080 .fill-N1{fill:#0A0F25;}
		.d2-3631132080 .fill-N2{fill:#676C7E;}
		.d2-3631132080 .fill-N3{fill:#9499AB;}
		.d2-3631132080 .fill-N4{fill:#CFD2DD;}
		.d2-3631132080 .fill-N5{fill:#DEE1EB;}
		.d2-3631132080 .fill-N6{fill:#EEF1F8;}
		.d2-3631132080 .fill-N7{fill:#FFFFFF;}
		.d2-3631132080 .fill-B1{fill:#0D32B2;}
		.d2-3631132080 .fill-B2{fill:#0D32B2;}
		.d2-3631132080 .fill-B3{fill:#E3E9FD;}
		.d2-3631132080 .fill-B4{fill:#E3E9FD;}
		.d2-3631132080 .fill-B5{fill:#EDF0FD;}
		.d2-3631132080 .fill-B6{fill:#F7F8FE;}
		.d2-3631132080 .fill-AA2{fill:#4A6FF3;}
		.d2-3631132080 .fill-AA4{fill:#EDF0FD;}
		.d2-3631132080 .fill-AA5{fill:#F7F8FE;}
		.d2-3631132080 .fill-AB4{fill:#EDF0FD;}
		.d2-3631132080 .fill-AB5{fill:#F7F8FE;}
		.d2-3631132080 .stroke-N1{stroke:#0A0F25;}
		.d2-3631132080 .stroke-N2{stroke:#676C7E;}
		.d2-3631132080 .stroke-N3{stroke:#9499AB;}
		.d2-3631132080 .stroke-N4{stroke:#CFD2DD;}
		.d2-3631132080 .stroke-N5{stroke:#DEE1EB;}
		.d2-3631132080 .stroke-N6{stroke:#EEF1F8;}
		.d2-3631132080 .stroke-N7{stroke:#FFFFFF;}
		.d2-3631132080 .stroke-B1{stroke:#0D32B2;}
		.d2-3631132080 .stroke-B2{stroke:#0D32B2;}
		.d2-3631132080 .stroke-B3{stroke:#E3E9FD;}
		.d2-3631132080 .stroke-B4{stroke:#E3E9FD;}
		.d2-3631132080 .stroke-B5{stroke:#EDF0FD;}
		.d2-3631132080 .stroke-B6{stroke:#F7F8FE;}
		.d2-3631132080 .stroke-AA2{stroke:#4A6FF3;}
		.d2-3631132080 .stroke-AA4{stroke:#EDF0FD;}
		.d2-3631132080 .stroke-AA5{stroke:#F7F8FE;}
		.d2-3631132080 .stroke-AB4{stroke:#EDF0FD;}
		.d2-3631132080 .stroke-AB5{stroke:#F7F8FE;}
		.d2-3631132080 .background-color-N1{background-color:#0A0F25;}
		.d2-3631132080 .background-color-N2{background-color:#676C7E;}
		.d2-3631132080 .background-color-N3{background-color:#9499AB;}
		.d2-3631132080 .background-color-N4{background-color:#CFD2DD;}
		.d2-3631132080 .background-color-N5{background-color:#DEE1EB;}
		.d2-3631132080 .background-color-N6{background-color:#EEF1F8;}
		.d2-3631132080 .background-color-N7{background-color:#FFFFFF;}
		.d2-3631132080 .background-color-B1{background-color:#0D32B2;}
		.d2-3631132080 .background-color-B2{background-color:#0D32B2;}
		.d2-3631132080 .background-color-B3{background-color:#E3E9FD;}
		.d2-3631132080 .background-color-B4{background-color:#E3E9FD;}
		.d2-3631132080 .background-color-B5{background-color:#EDF0FD;}
		.d2-3631132080 .background-color-B6{background-color:#F7F8FE;}
		.d2-3631132080 .background-color-AA2{background-color:#4A6FF3;}
		.d2-3631132080 .background-color-AA4{background-color:#EDF0FD;}
		.d2-3631132080 .background-color-AA5{background-color:#F7F8FE;}
		.d2-3631132080 .background-color-AB4{background-color:#EDF0FD;}
		.d2-3631132080 .background-color-AB5{background-color:#F7F8FE;}
		.d2-3631132080 .color-N1{color:#0A0F25;}
		.d2-3631132080 .color-N2{color:#676C7E;}
		.d2-3631132080 .color-N3{color:#9499AB;}
		.d2-3631132080 .color-N4{color:#CFD2DD;}
		.d2-3631132080 .color-N5{color:#DEE1EB;}
		.d2-3631132080 .color-N6{color:#EEF1F8;}
		.d2-3631132080 .color-N7{color:#FFFFFF;}
		.d2-3631132080 .color-B1{color:#0D32B2;}
		.d2-3631132080 .color-B2{color:#0D32B2;}
		.d2-3631132080 .color-B3{color:#E3E9FD;}
		.d2-3631132080 .color-B4{color:#E3E9FD;}
		.d2-3631132080 .color-B5{color:#EDF0FD;}
		.d2-3631132080 .color-B6{color:#F7F8FE;}
		.d2-3631132080 .color-AA2{color:#4A6FF3;}
		.d2-3631132080 .color-AA4{color:#EDF0FD;}
		.d2-3631132080 .color-AA5{color:#F7F8FE;}
		.d2-3631132080 .color-AB4{color:#EDF0FD;}
		.d2-3631132080 .color-AB5{color:#F7F8FE;}.appendix text.text{fill:#0A0F25}.md{--color-fg-default:#0A0F25;--color-fg-muted:#676C7E;--color-fg-subtle:#9499AB;--color-canvas-default:#FFFFFF;--color-canvas-subtle:#EEF1F8;--color-border-default:#0D32B2;--color-border-muted:#0D32B2;--color-neutral-muted:#EEF1F8;--color-accent-fg:#0D32B2;--color-accent-emphasis:#0D32B2;--color-attention-subtle:#676C7E;--color-danger-fg:red;}.sketch-overlay-B1{fill:url(#streaks-darker-d2-3631132080);mix-blend-mode:lighten}.sketch-overlay-B2{fill:url(#streaks-darker-d2-3631132080);mix-blend-mode:lighten}.sketch-overlay-B3{fill:url(#streaks-bright-d2-3631132080);mix-blend-mode:darken}.sketch-overlay-B4{fill:url(#streaks-bright-d2-3631132080);mix-blend-mode:darken}.sketch-overlay-B5{fill:url(#streaks-bright-d2-3631132080);mix-blend-mode:darken}.sketch-overlay-B6{fill:url(#streaks-bright-d2-3631132080);mix-blend-mode:darken}.sketch-overlay-AA2{fill:url(#streaks-dark-d2-3631132080);mix-blend-mode:overlay}.sketch-overlay-AA4{fill:url(#streaks-bright-d2-3631132080);mix-blend-mode:darken}.sketch-overlay-AA5{fill:url(#streaks-bright-d2-3631132080);mix-blend-mode:darken}.sketch-overlay-AB4{fill:url(#streaks-bright-d2-3631132080);mix-blend-mode:darken}.sketch-overlay-AB5{fill:url(#streaks-bright-d2-3631132080);mix-blend-mode:darken}.sketch-overlay-N1{fill:url(#streaks-darker-d2-3631132080);mix-blend-mode:lighten}.sketch-overlay-N2{fill:url(#streaks-dark-d2-3631132080);mix-blend-mode:overlay}.sketch-overlay-N3{fill:url(#streaks-normal-d2-3631132080);mix-blend-mode:color-burn}.sketch-overlay-N4{fill:url(#streaks-normal-d2-3631132080);mix-blend-mode:color-burn}.sketch-overlay-N5{fill:url(#streaks-bright-d2-3631132080);mix-blend-mode:darken}.sketch-overlay-N6{fill:url(#streaks-bright-d2-3631132080);mix-blend-mode:darken}.sketch-overlay-N7{fill:url(#streaks-bright-d2-3631132080);mix-blend-mode:darken}.light-code{display: block}.dark-code{display: none}@media screen and (prefers-color-scheme:dark){
		.d2-3631132080 .fill-N1{fill:#CDD6F4;}
		.d2-3631132080 .fill-N2{fill:#BAC2DE;}
		.d2-3631132080 .fill-N3{fill:#A6ADC8;}
		.d2-3631132080 .fill-N4{fill:#585B70;}
		.d2-3631132080 .fill-N5{fill:#45475A;}
		.d2-3631132080 .fill-N6{fill:#313244;}
		.d2-3631132080 .fill-N7{fill:#1E1E2E;}
		.d2-3631132080 .fill-B1{fill:#CBA6f7;}
		.d2-3631132080 .fill-B2{fill:#CBA6f7;}
		.d2-3631132080 .fill-B3{fill:#6C7086;}
		.d2-3631132080 .fill-B4{fill:#585B70;}
		.d2-3631132080 .fill-B5{fill:#45475A;}
		.d2-3631132080 .fill-B6{fill:#313244;}
		.d2-3631132080 .fill-AA2{fill:#f38BA8;}
		.d2-3631132080 .fill-AA4{fill:#45475A;}
		.d2-3631132080 .fill-AA5{fill:#313244;}
		.d2-3631132080 .fill-AB4{fill:#45475A;}
		.d2-3631132080 .fill-AB5{fill:#313244;}
		.d2-3631132080 .stroke-N1{stroke:#CDD6F4;}
		.d2-3631132080 .stroke-N2{stroke:#BAC2DE;}
		.d2-3631132080 .stroke-N3{stroke:#A6ADC8;}
		.d2-3631132080 .stroke-N4{stroke:#585B70;}
		.d2-3631132080 .stroke-N5{stroke:#45475A;}
		.d2-3631132080 .stroke-N6{stroke:#313244;}
		.d2-3631132080 .stroke-N7{stroke:#1E1E2E;}
		.d2-3631132080 .stroke-B1{stroke:#CBA6f7;}
		.d2-3631132080 .stroke-B2{stroke:#CBA6f7;}
		.d2-3631132080 .stroke-B3{stroke:#6C7086;}
		.d2-3631132080 .stroke-B4{stroke:#585B70;}
		.d2-3631132080 .stroke-B5{stroke:#45475A;}
		.d2-3631132080 .stroke-B6{stroke:#313244;}
		.d2-3631132080 .stroke-AA2{stroke:#f38BA8;}
		.d2-3631132080 .stroke-AA4{stroke:#45475A;}
		.d2-3631132080 .stroke-AA5{stroke:#313244;}
		.d2-3631132080 .stroke-AB4{stroke:#45475A;}
		.d2-3631132080 .stroke-AB5{stroke:#313244;}
		.d2-3631132080 .background-color-N1{background-color:#CDD6F4;}
		.d2-3631132080 .background-color-N2{background-color:#BAC2DE;}
		.d2-3631132080 .background-color-N3{background-color:#A6ADC8;}
		.d2-3631132080 .background-color-N4{background-color:#585B70;}
		.d2-3631132080 .background-color-N5{background-color:#45475A;}
		.d2-3631132080 .background-color-N6{background-color:#313244;}
		.d2-3631132080 .background-color-N7{background-color:#1E1E2E;}
		.d2-3631132080 .background-color-B1{background-color:#CBA6f7;}
		.d2-3631132080 .background-color-B2{background-color:#CBA6f7;}
		.d2-3631132080 .background-color-B3{background-color:#6C7086;}
		.d2-3631132080 .background-color-B4{background-color:#585B70;}
		.d2-3631132080 .background-color-B5{background-color:#45475A;}
		.d2-3631132080 .background-color-B6{background-color:#313244;}
		.d2-3631132080 .background-color-AA2{background-color:#f38BA8;}
		.d2-3631132080 .background-color-AA4{background-color:#45475A;}
		.d2-3631132080 .background-color-AA5{background-color:#313244;}
		.d2-3631132080 .background-color-AB4{background-color:#45475A;}
		.d2-3631132080 .background-color-AB5{background-color:#313244;}
		.d2-3631132080 .color-N1{color:#CDD6F4;}
		.d2-3631132080 .color-N2{color:#BAC2DE;}
		.d2-3631132080 .color-N3{color:#A6ADC8;}
		.d2-3631132080 .color-N4{color:#585B70;}
		.d2-3631132080 .color-N5{color:#45475A;}
		.d2-3631132080 .color-N6{color:#313244;}
		.d2-3631132080 .color-N7{color:#1E1E2E;}
		.d2-3631132080 .color-B1{color:#CBA6f7;}
		.d2-3631132080 .color-B2{color:#CBA6f7;}
		.d2-3631132080 .color-B3{color:#6C7086;}
		.d2-3631132080 .color-B4{color:#585B70;}
		.d2-3631132080 .color-B5{color:#45475A;}
		.d2-3631132080 .color-B6{color:#313244;}
		.d2-3631132080 .color-AA2{color:#f38BA8;}
		.d2-3631132080 .color-AA4{color:#45475A;}
		.d2-3631132080 .color-AA5{color:#313244;}
		.d2-3631132080 .color-AB4{color:#45475A;}
		.d2-3631132080 .color-AB5{color:#313244;}.appendix text.text{fill:#CDD6F4}.md{--color-fg-default:#CDD6F4;--color-fg-muted:#BAC2DE;--color-fg-subtle:#A6ADC8;--color-canvas-default:#1E1E2E;--color-canvas-subtle:#313244;--color-border-default:#CBA6f7;--color-border-muted:#CBA6f7;--color-neutral-muted:#313244;--color-accent-fg:#CBA6f7;--color-accent-emphasis:#CBA6f7;--color-attention-subtle:#BAC2DE;--color-danger-fg:red;}.sketch-overlay-B1{fill:url(#streaks-normal-d2-3631132080);mix-blend-mode:color-burn}.sketch-overlay-B2{fill:url(#streaks-normal-d2-3631132080);mix-blend-mode:color-burn}.sketch-overlay-B3{fill:url(#streaks-dark-d2-3631132080);mix-blend-mode:overlay}.sketch-overlay-B4{fill:url(#streaks-dark-d2-3631132080);mix-blend-mode:overlay}.sketch-overlay-B5{fill:url(#streaks-darker-d2-3631132080);mix-blend-mode:lighten}.sketch-overlay-B6{fill:url(#streaks-darker-d2-3631132080);mix-blend-mode:lighten}.sketch-overlay-AA2{fill:url(#streaks-normal-d2-3631132080);mix-blend-mode:color-burn}.sketch-overlay-AA4{fill:url(#streaks-darker-d2-3631132080);mix-blend-mode:lighten}.sketch-overlay-AA5{fill:url(#streaks-darker-d2-3631132080);mix-blend-mode:lighten}.sketch-overlay-AB4{fill:url(#streaks-darker-d2-3631132080);mix-blend-mode:lighten}.sketch-overlay-AB5{fill:url(#streaks-darker-d2-3631132080);mix-blend-mode:lighten}.sketch-overlay-N1{fill:url(#streaks-normal-d2-3631132080);mix-blend-mode:color-burn}.sketch-overlay-N2{fill:url(#streaks-normal-d2-3631132080);mix-blend-mode:color-burn}.sketch-overlay-N3{fill:url(#streaks-normal-d2-3631132080);mix-blend-mode:color-burn}.sketch-overlay-N4{fill:url(#streaks-dark-d2-3631132080);mix-blend-mode:overlay}.sketch-overlay-N5{fill:url(#streaks-darker-d2-3631132080);mix-blend-mode:lighten}.sketch-overlay-N6{fill:url(#streaks-darker-d2-3631132080);mix-blend-mode:lighten}.sketch-overlay-N7{fill:url(#streaks-darker-d2-3631132080);mix-blend-mode:lighten}.light-code{display: none}.dark-code{display: block}}]]></style><g class="djA="><g class="shape" ><rect x="0.000000" y="0.000000" width="740.000000" height="616.000000" class=" stroke-B1 fill-B4" style="stroke-width:2;" /></g><text x="370.000000" y="33.000000" class="text fill-N1" style="text-anchor:middle;font-size:28px">v0.x</text></g><g class="djE="><g class="shape" ><rect x="820.000000" y="0.000000" width="386.000000" height="616.000000" class=" stroke-B1 fill-B4" style="stroke-width:2;" /></g><text x="1013.000000" y="33.000000" class="text fill-N1" style="text-anchor:middle;font-size:28px">v1.0</text></g><g class="djAubGF5b3V0 stable"><g class="shape" ><rect x="60.000000" y="60.000000" width="620.000000" height="66.000000" rx="4.000000" class=" stroke-B1 fill-B5" style="stroke-width:2;" /></g><text x="370.000000" y="98.500000" class="text-bold fill-N1" style="text-anchor:middle;font-size:16px">Component</text></g><g class="djAuY29sb3I= stable"><g class="shape" ><rect x="60.000000" y="166.000000" width="620.000000" height="66.000000" rx="4.000000" class=" stroke-B1 fill-B5" style="stroke-width:2;" /></g><text x="370.000000" y="204.500000" class="text-bold fill-N1" style="text-anchor:middle;font-size:16px">Component</text></g><g class="djAuZGF0YWZsb3c= experimental"><g class="shape" ><rect x="60.000000" y="272.000000" width="620.000000" height="284.000000" rx="6.000000" stroke="#d9534f" fill="#fdecea" style="stroke-width:2;" /></g><text x="370.000000" y="293.000000" fill="#a8322d" class="text-bold" style="text-anchor:middle;font-size:16px">Experimental Component</text></g><g class="djEubGF5b3V0 stable"><g class="shape" ><rect x="880.000000" y="60.000000" width="266.000000" height="66.000000" rx="4.000000" class=" stroke-B1 fill-B5" style="stroke-width:2;" /></g><text x="1013.000000" y="98.500000" class="text-bold fill-N1" style="text-anchor:middle;font-size:16px">Component</text></g><g class="djEuY29sb3I= stable"><g class="shape" ><rect x="880.000000" y="166.000000" width="266.000000" height="66.000000" rx="4.000000" class=" stroke-B1 fill-B5" style="stroke-width:2;" /></g><text x="1013.000000" y="204.500000" class="text-bold fill-N1" style="text-anchor:middle;font-size:16px">Component</text></g><g class="djEuZGF0YWZsb3c= reviewed"><g class="shape" ><rect x="880.000000" y="272.000000" width="266.000000" height="284.000000" rx="6.000000" stroke="#2e9e57" fill="#e6f4ea" style="stroke-width:2;" /></g><text x="1013.000000" y="293.000000" fill="#1d6b3a" class="text-bold" style="text-anchor:middle;font-size:16px">Component</text></g><g class="djAuZGF0YWZsb3cuYmxhbmsx blank"><g class="shape" ><rect x="100.000000" y="312.000000" width="150.000000" height="82.000000" stroke="transparent" fill="transparent" style="stroke-width:2;" /></g></g><g class="djAuZGF0YWZsb3cuaW1wbDE= temporary"><g class="shape" ><rect x="290.000000" y="312.000000" width="160.000000" height="82.000000" stroke="#e8a29f" fill="#fff7f6" style="stroke-width:2;stroke-dasharray:6.000000,5.919384;" /></g><text x="370.000000" y="350.500000" fill="#7a2420" class="text-bold" style="text-anchor:middle;font-size:16px"><tspan x="370.000000" dy="0.000000">Temporary</tspan><tspan x="370.000000" dy="18.500000">Implementation</tspan></text></g><g class="djAuZGF0YWZsb3cuYmxhbmsy blank"><g class="shape" ><rect x="490.000000" y="312.000000" width="150.000000" height="82.000000" stroke="transparent" fill="transparent" style="stroke-width:2;" /></g></g><g class="djAuZGF0YWZsb3cuaW1wbDM= temporary"><g class="shape" ><rect x="100.000000" y="434.000000" width="160.000000" height="82.000000" stroke="#e8a29f" fill="#fff7f6" style="stroke-width:2;stroke-dasharray:6.000000,5.919384;" /></g><text x="180.000000" y="472.500000" fill="#7a2420" class="text-bold" style="text-anchor:middle;font-size:16px"><tspan x="180.000000" dy="0.000000">Temporary</tspan><tspan x="180.000000" dy="18.500000">Implementation</tspan></text></g><g class="djAuZGF0YWZsb3cuYmxhbmsz blank"><g class="shape" ><rect x="300.000000" y="434.000000" width="140.000000" height="82.000000" stroke="transparent" fill="transparent" style="stroke-width:2;" /></g></g><g class="djAuZGF0YWZsb3cuaW1wbDI= temporary"><g class="shape" ><rect x="480.000000" y="434.000000" width="160.000000" height="82.000000" stroke="#e8a29f" fill="#fff7f6" style="stroke-width:2;stroke-dasharray:6.000000,5.919384;" /></g><text x="560.000000" y="472.500000" fill="#7a2420" class="text-bold" style="text-anchor:middle;font-size:16px"><tspan x="560.000000" dy="0.000000">Temporary</tspan><tspan x="560.000000" dy="18.500000">Implementation</tspan></text></g><g class="djEuZGF0YWZsb3cuaW1wbA== rewritten"><g class="shape" ><rect x="930.000000" y="365.000000" width="166.000000" height="98.000000" stroke="#93cfa8" fill="#f6fbf7" style="stroke-width:2;" /></g><text x="1013.000000" y="403.500000" fill="#1f4d2e" class="text-bold" style="text-anchor:middle;font-size:16px"><tspan x="1013.000000" dy="0.000000">Hand-written,</tspan><tspan x="1013.000000" dy="17.666667">Human-reviewed</tspan><tspan x="1013.000000" dy="17.666667">Implementation</tspan></text></g><g class="djAuZGF0YWZsb3cuKGltcGwxIC0mZ3Q7IGltcGwyKVswXQ== ai"><marker id="mk-d2-3631132080-2659692355" markerWidth="10.000000" markerHeight="12.000000" refX="7.000000" refY="6.000000" viewBox="0.000000 0.000000 10.000000 12.000000" orient="auto" markerUnits="userSpaceOnUse"> <polygon points="0.000000,0.000000 10.000000,6.000000 0.000000,12.000000" fill="#d9534f" class="connection" stroke-width="2" /> </marker><path d="M 435.680593 395.084254 L 492.638813 431.831493" stroke="#d9534f" fill="none" class="connection" style="stroke-width:2;" marker-end="url(#mk-d2-3631132080-2659692355)" mask="url(#d2-3631132080)" /><text x="465.500000" y="420.000000" fill="#a8322d" class="text-bold" style="text-anchor:middle;font-size:16px">AI</text></g><g class="djAuZGF0YWZsb3cuKGltcGwyIC0mZ3Q7IGltcGwzKVswXQ== ai"><path d="M 478.000000 475.000000 L 264.000000 475.000000" stroke="#d9534f" fill="none" class="connection" style="stroke-width:2;" marker-end="url(#mk-d2-3631132080-2659692355)" mask="url(#d2-3631132080)" /><text x="370.500000" y="481.000000" fill="#a8322d" class="text-bold" style="text-anchor:middle;font-size:16px">AI</text></g><g class="djAuZGF0YWZsb3cuKGltcGwzIC0mZ3Q7IGltcGwxKVswXQ== ai"><path d="M 245.680593 432.915746 L 302.638813 396.168507" stroke="#d9534f" fill="none" class="connection" style="stroke-width:2;" marker-end="url(#mk-d2-3631132080-2659692355)" mask="url(#d2-3631132080)" /><text x="275.500000" y="420.000000" fill="#a8322d" class="text-bold" style="text-anchor:middle;font-size:16px">AI</text></g><g class="KHYwIC0mZ3Q7IHYxKVswXQ=="><marker id="mk-d2-3631132080-3519660172" markerWidth="16.000000" markerHeight="20.000000" refX="10.000000" refY="10.000000" viewBox="0.000000 0.000000 16.000000 20.000000" orient="auto" markerUnits="userSpaceOnUse"> <polygon points="0.000000,0.000000 16.000000,10.000000 0.000000,20.000000" class="connection fill-B1" stroke-width="4" /> </marker><path d="M 743.000000 308.000000 L 813.000000 308.000000" fill="none" class="connection stroke-B1" style="stroke-width:4;" marker-end="url(#mk-d2-3631132080-3519660172)" mask="url(#d2-3631132080)" /></g><g class="KHYwLmRhdGFmbG93IC0mZ3Q7IHYxLmRhdGFmbG93KVswXQ=="><marker id="mk-d2-3631132080-2177206569" markerWidth="10.000000" markerHeight="12.000000" refX="7.000000" refY="6.000000" viewBox="0.000000 0.000000 10.000000 12.000000" orient="auto" markerUnits="userSpaceOnUse"> <polygon points="0.000000,0.000000 10.000000,6.000000 0.000000,12.000000" class="connection fill-B2" stroke-width="2" /> </marker><path d="M 682.000000 414.000000 L 876.000000 414.000000" fill="none" class="connection stroke-B2" style="stroke-width:2;stroke-dasharray:8.000000,7.892511;" marker-end="url(#mk-d2-3631132080-2177206569)" mask="url(#d2-3631132080)" /></g><mask id="d2-3631132080" maskUnits="userSpaceOnUse" x="-9" y="-9" width="1224" height="634">
<rect x="-9" y="-9" width="1224" height="634" fill="white"></rect>
<rect x="456.000000" y="404.000000" width="19" height="21" fill="black"></rect>
<rect x="361.000000" y="465.000000" width="19" height="21" fill="black"></rect>
<rect x="266.000000" y="404.000000" width="19" height="21" fill="black"></rect>
</mask></svg></svg>
</div></div><h3 id="example-font-renderer" tabindex="-1">Example: Font Renderer <a class="header-anchor" href="#example-font-renderer" aria-label="Permalink to &quot;Example: Font Renderer&quot;">​</a></h3><ul><li>The font renderer was initially hand-written using <code>piet-gpu</code>, which is deprecated now,</li><li>so it was migrated to <code>vello</code>, which does not provide a batched API,</li><li>so it was migrated to <code>etagere</code>, which does not support non-orthogonal rotation and realtime zoom,</li><li>so it was migrated to an <strong>mSDF</strong> shader, which had suboptimal quality and works well for Latin script but requires a large SDF texture for CJK,</li><li>so it was migrated to a <strong>Slug</strong> shader, which works well for most parts but cannot draw a dynamic border size,</li><li>so it was migrated to <strong>mSDF + Slug</strong>, which is vibe-coded and is planned to be hand-optimized later.</li></ul><h3 id="status" tabindex="-1">Status <a class="header-anchor" href="#status" aria-label="Permalink to &quot;Status&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Status</th></tr></thead><tbody><tr><td>Dataflow</td><td>Needs a redesign<br><a href="/ezel/proposals/graph-agnostic-dataflow">Graph-Agnostic Dataflow</a></td></tr><tr><td>Serialization</td><td>Needs a redesign<br>JSON → JSON5 → Fory → rkyv with patch → ?</td></tr><tr><td>Temporal axis</td><td>Needs a redesign</td></tr><tr><td>Curve Shader</td><td>The number of subdivision is chosen arbitrarily; the approximation of cubic beziers may change; the shader algorithm may change</td></tr><tr><td>Cartesian3 / Polar / Radar</td><td>Needs a design<br>Zoom behavior</td></tr><tr><td>SVG</td><td>Needs a design<br>Tier 2</td></tr><tr><td>Font Renderer</td><td>Needs hand-optimization<br>Does not support COLRv0 / CBDT</td></tr></tbody></table>`,16)])])}const f=e(r,[["render",s]]);export{h as __pageData,f as default};
