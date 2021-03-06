# Ezel

A Python/Rust plotting library written in Rust using [plotters](https://github.com/38/plotters).

- fast
- object-oriented API
- no problem with 1,000,000 points

---

- [(WIP) Guide](https://elbaro.github.io/ezel/guide)
- [API Reference](https://elbaro.github.io/ezel/api)
- Benchmarks

## vs Matplotlib

|                      | n = 10,000 | n = 100,000 | n = 1,000,000  | n = 10,000,000 |
|----------------------|------------|-------------|----------------| -------------- |
| ezel                 | 0.043949   | 0.179385    | 1.561190       | 15.397686      |
| matplotlib           | 0.416871   | 3.159303    | crash          |                |
| matplotlib (GTK3agg) | 0.414843   | 1.723030    | crash          |                |

This may not be a fair comparison but gives you a sense of how they handle large dataset.

<img src="https://github.com/elbaro/ezel/raw/main/screenshots/ezel.png" class="galleryItem" width=300px /><img src="https://github.com/elbaro/ezel/raw/main/screenshots/matplotlib.png" class="galleryItem" width=300px />

left: Ezel with n=1,000,000
right: matplotlib with n=1,000

In trade, ezel does not yet have many backends and you should specify the x-range and y-range in advance.
However these can be implemented over time because plotters already have many backends (svg, desktop, ..) and x/y-range can be inferred by storing data.

```py
import time

import numpy as np
from matplotlib import pyplot as plt

import ezel as ez

n = 1000*10
x = np.random.randn(n)  # clipping didn't improve matplotlib
y = np.random.randn(n)


def draw_ezel():
    canvas = ez.Canvas()
    c = ez.Chart(canvas,
                 x_range=ez.Range.f64(-10,10),
                 y_range=ez.Range.f64(-10,10),
                 caption='Title Chart1',
                 margin=10)
    c.line(x, y)
    canvas.save('ezel.png')


def draw_matplotlib():
    import matplotlib as mpl
    mpl.rcParams['agg.path.chunksize'] = n * 10  # still crashes

    plt.plot(x, y)
    plt.savefig('matplotlib.png')


t = time.time()
draw_ezel()
print(time.time() - t)

t = time.time()
draw_matplotlib()
print(time.time() - t)
```

## Install

Prerequisites:
- rust
- libfontconfig
- libfreetype

```sh
pip install ezel
```

or

```sh
git clone https://github.com/elbaro/ezel.git
cd ezel
pip install .
```

## Usage
```py
import ezel as ez
import numpy as np

x = np.array([1.0, 3.0, 5.0])
y = np.array([7.0, 2.0, 3.0])

canvas = ez.Canvas()
left, right = canvas.split_horizontally()
c = ez.Chart(left, caption='Title Chart1', margin=10)
c.line(x, y)
canvas.save('ezel.png')
```


## Roadmap for 0.1.x - Painting API (Canvas/Chart)
Canvas defines a fixed drawing area and Chart draws primitives on it.
All drawing APIs are imperative.

- [x] Draw x, y axis and grid by default
- [x] Accept a Python list as an argument
- [x] Accept i32, i64, f32 as arguments (by converting to f64)
- [x] Add .scatter()
- [x] Support datetime, date, time, duration in x-axis
- [x] auto color rotation
- [x] Title font customization
- [x] line, scatter style customization (except color)
- [x] Axis layout customization
- [x] Label layout customization
- [x] Python docs
- [ ] Histogram

## Roadmap for 0.2.x - Presentation API (Frame)
In 0.2.x, title/axis functions are extracted from a Chart API to a presentation layer.

- [ ] Better default layout
- [ ] Axis style customization
- [ ] Label style customization
- [ ] intergrate with colorous crate and allow color strings
- [ ] Refactor repeating code with macros
- [ ] Error and API parameter type review
- [ ] Support other backends such as SVG and wasm
- [ ] Add `xy=` which accepts a sequence of xy pairs.
- [ ] Log-scale on x, y axis
- [ ] Draw i32, i64, f32 data without converting to f64
- [ ] Support Pandas/PyPolars DataFrames/Series
- [ ] Static Build
- [ ] Jupyter Notebook Intergration
- [ ] Interactive Jupyter widget / html similar to Bokeh.

## Roadmap for 0.3.x - Abstract API (Motive)
The highest API that defines data representations.
The API retains the user data and infer the axis range.
This will be available as a Rust library as well.
