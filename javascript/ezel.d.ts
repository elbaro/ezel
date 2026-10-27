/* tslint:disable */
/* eslint-disable */

/**
 * A mounted plot's categorical input series. JS supplies logical labels; the
 * Rust series maintains the append-only catalog and code column.
 */
export class CategoricalSeries {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    extend(values: string[]): void;
    prepend(values: string[]): void;
    push(value: string): void;
    set(index: number, value: string): void;
    set_max_capacity(max_capacity?: number | null): void;
    truncate_back(count: number): void;
    truncate_front(count: number): void;
}

/**
 * JS handle to the dataflow graph driving one mounted plot, obtained from an
 * `<ezel-plot>` element's `graph` property.
 *
 * Input series are addressed by the `NodeId` recorded in the plot document.
 * The handle stays usable if the element is later unmounted: mutations then
 * feed a graph nobody renders, without retaining its renderer window.
 */
export class JsGraph {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Return the categorical input rooted at `node_id`. A categorical input
     * is node-shaped: its codes are `out(0)` and its catalog is `out(1)`.
     */
    categorical_input_by_node_id(node_id: bigint): CategoricalSeries;
    /**
     * Return the numeric input at `node_id`.
     */
    numeric_input_by_node_id(node_id: bigint): NumericSeries;
    /**
     * Return the string input at `node_id`.
     */
    string_input_by_node_id(node_id: bigint): StringSeries;
    /**
     * Return the temporal input at `node_id`.
     */
    temporal_input_by_node_id(node_id: bigint): TemporalSeries;
    /**
     * Return the raw `u32` input at `node_id`.
     */
    u32_input_by_node_id(node_id: bigint): U32Series;
}

/**
 * A mounted plot's numeric input series. The wrapper owns the real Rust
 * [`NumericSeries`] handle and requests a redraw after each successful
 * mutation.
 */
export class NumericSeries {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    extend(values: Float64Array): void;
    prepend(values: Float64Array): void;
    push(value: number): void;
    set(index: number, value: number): void;
    set_max_capacity(max_capacity?: number | null): void;
    truncate_back(count: number): void;
    truncate_front(count: number): void;
}

/**
 * A mounted plot's string input series.
 */
export class StringSeries {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    extend(values: string[]): void;
    prepend(values: string[]): void;
    push(value: string): void;
    set(index: number, value: string): void;
    set_max_capacity(max_capacity?: number | null): void;
    truncate_back(count: number): void;
    truncate_front(count: number): void;
}

/**
 * A mounted plot's temporal input series. Timestamps cross the JS boundary as
 * `bigint`; batches use `BigInt64Array`.
 */
export class TemporalSeries {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    extend(values: BigInt64Array): void;
    prepend(values: BigInt64Array): void;
    push(value: bigint): void;
    set(index: number, value: bigint): void;
    set_max_capacity(max_capacity?: number | null): void;
    truncate_back(count: number): void;
    truncate_front(count: number): void;
}

/**
 * A mounted plot's raw `u32` input series.
 */
export class U32Series {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    extend(values: Uint32Array): void;
    prepend(values: Uint32Array): void;
    push(value: number): void;
    set(index: number, value: number): void;
    set_max_capacity(max_capacity?: number | null): void;
    truncate_back(count: number): void;
    truncate_front(count: number): void;
}

/**
 * wasm-bindgen start hook: installs the panic handler, hooks `tracing` to the
 * browser console (filtered to ezel-crate events only), starts the single
 * shared winit event loop that drives every mounted plot, and defines the
 * `<ezel-plot>` custom element.
 */
export function wasm_main(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_categoricalseries_free: (a: number, b: number) => void;
    readonly __wbg_jsgraph_free: (a: number, b: number) => void;
    readonly __wbg_numericseries_free: (a: number, b: number) => void;
    readonly __wbg_stringseries_free: (a: number, b: number) => void;
    readonly __wbg_temporalseries_free: (a: number, b: number) => void;
    readonly __wbg_u32series_free: (a: number, b: number) => void;
    readonly categoricalseries_extend: (a: number, b: any) => [number, number];
    readonly categoricalseries_prepend: (a: number, b: any) => [number, number];
    readonly categoricalseries_push: (a: number, b: number, c: number) => [number, number];
    readonly categoricalseries_set: (a: number, b: number, c: number, d: number) => [number, number];
    readonly categoricalseries_set_max_capacity: (a: number, b: number) => [number, number];
    readonly categoricalseries_truncate_back: (a: number, b: number) => [number, number];
    readonly categoricalseries_truncate_front: (a: number, b: number) => [number, number];
    readonly jsgraph_categorical_input_by_node_id: (a: number, b: bigint) => [number, number, number];
    readonly jsgraph_numeric_input_by_node_id: (a: number, b: bigint) => [number, number, number];
    readonly jsgraph_string_input_by_node_id: (a: number, b: bigint) => [number, number, number];
    readonly jsgraph_temporal_input_by_node_id: (a: number, b: bigint) => [number, number, number];
    readonly jsgraph_u32_input_by_node_id: (a: number, b: bigint) => [number, number, number];
    readonly numericseries_extend: (a: number, b: number, c: number) => [number, number];
    readonly numericseries_prepend: (a: number, b: number, c: number) => [number, number];
    readonly numericseries_push: (a: number, b: number) => [number, number];
    readonly numericseries_set: (a: number, b: number, c: number) => [number, number];
    readonly numericseries_set_max_capacity: (a: number, b: number) => [number, number];
    readonly numericseries_truncate_back: (a: number, b: number) => [number, number];
    readonly numericseries_truncate_front: (a: number, b: number) => [number, number];
    readonly stringseries_extend: (a: number, b: any) => [number, number];
    readonly stringseries_prepend: (a: number, b: any) => [number, number];
    readonly stringseries_push: (a: number, b: number, c: number) => [number, number];
    readonly stringseries_set: (a: number, b: number, c: number, d: number) => [number, number];
    readonly stringseries_set_max_capacity: (a: number, b: number) => [number, number];
    readonly stringseries_truncate_back: (a: number, b: number) => [number, number];
    readonly stringseries_truncate_front: (a: number, b: number) => [number, number];
    readonly temporalseries_extend: (a: number, b: number, c: number) => [number, number];
    readonly temporalseries_prepend: (a: number, b: number, c: number) => [number, number];
    readonly temporalseries_push: (a: number, b: bigint) => [number, number];
    readonly temporalseries_set: (a: number, b: number, c: bigint) => [number, number];
    readonly temporalseries_set_max_capacity: (a: number, b: number) => [number, number];
    readonly temporalseries_truncate_back: (a: number, b: number) => [number, number];
    readonly temporalseries_truncate_front: (a: number, b: number) => [number, number];
    readonly u32series_extend: (a: number, b: number, c: number) => [number, number];
    readonly u32series_prepend: (a: number, b: number, c: number) => [number, number];
    readonly u32series_push: (a: number, b: number) => [number, number];
    readonly u32series_set: (a: number, b: number, c: number) => [number, number];
    readonly u32series_set_max_capacity: (a: number, b: number) => [number, number];
    readonly u32series_truncate_back: (a: number, b: number) => [number, number];
    readonly u32series_truncate_front: (a: number, b: number) => [number, number];
    readonly wasm_main: () => void;
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___wasm_bindgen_694c529d98cb62ca___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_694c529d98cb62ca___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___js_sys_a7e79eb6351e7628___Array__web_sys_fed8f1bdfb7e4e8b___features__gen_ResizeObserver__ResizeObserver______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___wasm_bindgen_694c529d98cb62ca___sys__JsNullable_wgpu_d7863a5b81367634___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_694c529d98cb62ca___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___web_sys_fed8f1bdfb7e4e8b___features__gen_HtmlElement__HtmlElement__bool______true_: (a: number, b: number, c: any, d: number) => void;
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___web_sys_fed8f1bdfb7e4e8b___features__gen_HtmlElement__HtmlElement__u32______true_: (a: number, b: number, c: any, d: number) => void;
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___wasm_bindgen_694c529d98cb62ca___sys__JsNullable_wgpu_d7863a5b81367634___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_694c529d98cb62ca___JsError___true__15: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___wasm_bindgen_694c529d98cb62ca___sys__JsNullable_wgpu_d7863a5b81367634___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_694c529d98cb62ca___JsError___true__16: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___web_sys_fed8f1bdfb7e4e8b___features__gen_HtmlElement__HtmlElement__wasm_bindgen_694c529d98cb62ca___JsValue__true_: (a: number, b: number, c: any) => any;
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___wasm_bindgen_694c529d98cb62ca___JsValue______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___wasm_bindgen_694c529d98cb62ca___JsValue______true__3: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___wasm_bindgen_694c529d98cb62ca___JsValue______true__4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___wasm_bindgen_694c529d98cb62ca___JsValue______true__5: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___wgpu_d7863a5b81367634___backend__webgpu__webgpu_sys__gen_GpuDeviceLostInfo__GpuDeviceLostInfo______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___wasm_bindgen_694c529d98cb62ca___JsValue______true__11: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___wasm_bindgen_694c529d98cb62ca___JsValue______true__12: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___wasm_bindgen_694c529d98cb62ca___JsValue______true__13: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke___wasm_bindgen_694c529d98cb62ca___JsValue______true__14: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_694c529d98cb62ca___convert__closures_____invoke_______true_: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
/** Browser-facing types added to wasm-bindgen's generated declarations. */
export interface EzelPlotEventMap {
	"ezel-error": CustomEvent<string>;
	mount: Event;
}

export interface EzelPlotElement extends HTMLElement {
	readonly graph: JsGraph | undefined;

	addEventListener<K extends keyof EzelPlotEventMap>(
		type: K,
		listener: (this: EzelPlotElement, event: EzelPlotEventMap[K]) => unknown,
		options?: boolean | AddEventListenerOptions,
	): void;
	removeEventListener<K extends keyof EzelPlotEventMap>(
		type: K,
		listener: (this: EzelPlotElement, event: EzelPlotEventMap[K]) => unknown,
		options?: boolean | EventListenerOptions,
	): void;
}

declare global {
	interface HTMLElementTagNameMap {
		"ezel-plot": EzelPlotElement;
	}
}
