# Page title

Subtitle

## Page heading

### Grouped Bar Chart

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"category":"A", "group": "x", "value":0.1},
      {"category":"A", "group": "y", "value":0.6},
      {"category":"A", "group": "z", "value":0.9},
      {"category":"B", "group": "x", "value":0.7},
      {"category":"B", "group": "y", "value":0.2},
      {"category":"B", "group": "z", "value":1.1},
      {"category":"C", "group": "x", "value":0.6},
      {"category":"C", "group": "y", "value":0.1},
      {"category":"C", "group": "z", "value":0.2}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "category"},
    "y": {"field": "value", "type": "quantitative"},
    "xOffset": {"field": "group"},
    "color": {"field": "group"}
  }
}
```

### Colored Scatterplot

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A scatterplot showing body mass and flipper lengths of penguins.",
  "data": {
    "values": [
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 39.1,
        "Beak Depth (mm)": 18.7,
        "Flipper Length (mm)": 181,
        "Body Mass (g)": 3750,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 39.5,
        "Beak Depth (mm)": 17.4,
        "Flipper Length (mm)": 186,
        "Body Mass (g)": 3800,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 40.3,
        "Beak Depth (mm)": 18,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 3250,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": null,
        "Beak Depth (mm)": null,
        "Flipper Length (mm)": null,
        "Body Mass (g)": null,
        "Sex": null
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 36.7,
        "Beak Depth (mm)": 19.3,
        "Flipper Length (mm)": 193,
        "Body Mass (g)": 3450,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 39.3,
        "Beak Depth (mm)": 20.6,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3650,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 38.9,
        "Beak Depth (mm)": 17.8,
        "Flipper Length (mm)": 181,
        "Body Mass (g)": 3625,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 39.2,
        "Beak Depth (mm)": 19.6,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 4675,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 34.1,
        "Beak Depth (mm)": 18.1,
        "Flipper Length (mm)": 193,
        "Body Mass (g)": 3475,
        "Sex": null
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 42,
        "Beak Depth (mm)": 20.2,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 4250,
        "Sex": null
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 37.8,
        "Beak Depth (mm)": 17.1,
        "Flipper Length (mm)": 186,
        "Body Mass (g)": 3300,
        "Sex": null
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 37.8,
        "Beak Depth (mm)": 17.3,
        "Flipper Length (mm)": 180,
        "Body Mass (g)": 3700,
        "Sex": null
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 41.1,
        "Beak Depth (mm)": 17.6,
        "Flipper Length (mm)": 182,
        "Body Mass (g)": 3200,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 38.6,
        "Beak Depth (mm)": 21.2,
        "Flipper Length (mm)": 191,
        "Body Mass (g)": 3800,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 34.6,
        "Beak Depth (mm)": 21.1,
        "Flipper Length (mm)": 198,
        "Body Mass (g)": 4400,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 36.6,
        "Beak Depth (mm)": 17.8,
        "Flipper Length (mm)": 185,
        "Body Mass (g)": 3700,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 38.7,
        "Beak Depth (mm)": 19,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 3450,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 42.5,
        "Beak Depth (mm)": 20.7,
        "Flipper Length (mm)": 197,
        "Body Mass (g)": 4500,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 34.4,
        "Beak Depth (mm)": 18.4,
        "Flipper Length (mm)": 184,
        "Body Mass (g)": 3325,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 46,
        "Beak Depth (mm)": 21.5,
        "Flipper Length (mm)": 194,
        "Body Mass (g)": 4200,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 37.8,
        "Beak Depth (mm)": 18.3,
        "Flipper Length (mm)": 174,
        "Body Mass (g)": 3400,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 37.7,
        "Beak Depth (mm)": 18.7,
        "Flipper Length (mm)": 180,
        "Body Mass (g)": 3600,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 35.9,
        "Beak Depth (mm)": 19.2,
        "Flipper Length (mm)": 189,
        "Body Mass (g)": 3800,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 38.2,
        "Beak Depth (mm)": 18.1,
        "Flipper Length (mm)": 185,
        "Body Mass (g)": 3950,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 38.8,
        "Beak Depth (mm)": 17.2,
        "Flipper Length (mm)": 180,
        "Body Mass (g)": 3800,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 35.3,
        "Beak Depth (mm)": 18.9,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 3800,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 40.6,
        "Beak Depth (mm)": 18.6,
        "Flipper Length (mm)": 183,
        "Body Mass (g)": 3550,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 40.5,
        "Beak Depth (mm)": 17.9,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 3200,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 37.9,
        "Beak Depth (mm)": 18.6,
        "Flipper Length (mm)": 172,
        "Body Mass (g)": 3150,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 40.5,
        "Beak Depth (mm)": 18.9,
        "Flipper Length (mm)": 180,
        "Body Mass (g)": 3950,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 39.5,
        "Beak Depth (mm)": 16.7,
        "Flipper Length (mm)": 178,
        "Body Mass (g)": 3250,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 37.2,
        "Beak Depth (mm)": 18.1,
        "Flipper Length (mm)": 178,
        "Body Mass (g)": 3900,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 39.5,
        "Beak Depth (mm)": 17.8,
        "Flipper Length (mm)": 188,
        "Body Mass (g)": 3300,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 40.9,
        "Beak Depth (mm)": 18.9,
        "Flipper Length (mm)": 184,
        "Body Mass (g)": 3900,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 36.4,
        "Beak Depth (mm)": 17,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 3325,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 39.2,
        "Beak Depth (mm)": 21.1,
        "Flipper Length (mm)": 196,
        "Body Mass (g)": 4150,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 38.8,
        "Beak Depth (mm)": 20,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3950,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 42.2,
        "Beak Depth (mm)": 18.5,
        "Flipper Length (mm)": 180,
        "Body Mass (g)": 3550,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 37.6,
        "Beak Depth (mm)": 19.3,
        "Flipper Length (mm)": 181,
        "Body Mass (g)": 3300,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 39.8,
        "Beak Depth (mm)": 19.1,
        "Flipper Length (mm)": 184,
        "Body Mass (g)": 4650,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 36.5,
        "Beak Depth (mm)": 18,
        "Flipper Length (mm)": 182,
        "Body Mass (g)": 3150,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 40.8,
        "Beak Depth (mm)": 18.4,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 3900,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 36,
        "Beak Depth (mm)": 18.5,
        "Flipper Length (mm)": 186,
        "Body Mass (g)": 3100,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 44.1,
        "Beak Depth (mm)": 19.7,
        "Flipper Length (mm)": 196,
        "Body Mass (g)": 4400,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 37,
        "Beak Depth (mm)": 16.9,
        "Flipper Length (mm)": 185,
        "Body Mass (g)": 3000,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 39.6,
        "Beak Depth (mm)": 18.8,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 4600,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 41.1,
        "Beak Depth (mm)": 19,
        "Flipper Length (mm)": 182,
        "Body Mass (g)": 3425,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 37.5,
        "Beak Depth (mm)": 18.9,
        "Flipper Length (mm)": 179,
        "Body Mass (g)": 2975,
        "Sex": null
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 36,
        "Beak Depth (mm)": 17.9,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3450,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 42.3,
        "Beak Depth (mm)": 21.2,
        "Flipper Length (mm)": 191,
        "Body Mass (g)": 4150,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 39.6,
        "Beak Depth (mm)": 17.7,
        "Flipper Length (mm)": 186,
        "Body Mass (g)": 3500,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 40.1,
        "Beak Depth (mm)": 18.9,
        "Flipper Length (mm)": 188,
        "Body Mass (g)": 4300,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 35,
        "Beak Depth (mm)": 17.9,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3450,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 42,
        "Beak Depth (mm)": 19.5,
        "Flipper Length (mm)": 200,
        "Body Mass (g)": 4050,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 34.5,
        "Beak Depth (mm)": 18.1,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 2900,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 41.4,
        "Beak Depth (mm)": 18.6,
        "Flipper Length (mm)": 191,
        "Body Mass (g)": 3700,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 39,
        "Beak Depth (mm)": 17.5,
        "Flipper Length (mm)": 186,
        "Body Mass (g)": 3550,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 40.6,
        "Beak Depth (mm)": 18.8,
        "Flipper Length (mm)": 193,
        "Body Mass (g)": 3800,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 36.5,
        "Beak Depth (mm)": 16.6,
        "Flipper Length (mm)": 181,
        "Body Mass (g)": 2850,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 37.6,
        "Beak Depth (mm)": 19.1,
        "Flipper Length (mm)": 194,
        "Body Mass (g)": 3750,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 35.7,
        "Beak Depth (mm)": 16.9,
        "Flipper Length (mm)": 185,
        "Body Mass (g)": 3150,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 41.3,
        "Beak Depth (mm)": 21.1,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 4400,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 37.6,
        "Beak Depth (mm)": 17,
        "Flipper Length (mm)": 185,
        "Body Mass (g)": 3600,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 41.1,
        "Beak Depth (mm)": 18.2,
        "Flipper Length (mm)": 192,
        "Body Mass (g)": 4050,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 36.4,
        "Beak Depth (mm)": 17.1,
        "Flipper Length (mm)": 184,
        "Body Mass (g)": 2850,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 41.6,
        "Beak Depth (mm)": 18,
        "Flipper Length (mm)": 192,
        "Body Mass (g)": 3950,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 35.5,
        "Beak Depth (mm)": 16.2,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 3350,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 41.1,
        "Beak Depth (mm)": 19.1,
        "Flipper Length (mm)": 188,
        "Body Mass (g)": 4100,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 35.9,
        "Beak Depth (mm)": 16.6,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3050,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 41.8,
        "Beak Depth (mm)": 19.4,
        "Flipper Length (mm)": 198,
        "Body Mass (g)": 4450,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 33.5,
        "Beak Depth (mm)": 19,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3600,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 39.7,
        "Beak Depth (mm)": 18.4,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3900,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 39.6,
        "Beak Depth (mm)": 17.2,
        "Flipper Length (mm)": 196,
        "Body Mass (g)": 3550,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 45.8,
        "Beak Depth (mm)": 18.9,
        "Flipper Length (mm)": 197,
        "Body Mass (g)": 4150,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 35.5,
        "Beak Depth (mm)": 17.5,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3700,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 42.8,
        "Beak Depth (mm)": 18.5,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 4250,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 40.9,
        "Beak Depth (mm)": 16.8,
        "Flipper Length (mm)": 191,
        "Body Mass (g)": 3700,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 37.2,
        "Beak Depth (mm)": 19.4,
        "Flipper Length (mm)": 184,
        "Body Mass (g)": 3900,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 36.2,
        "Beak Depth (mm)": 16.1,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 3550,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 42.1,
        "Beak Depth (mm)": 19.1,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 4000,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 34.6,
        "Beak Depth (mm)": 17.2,
        "Flipper Length (mm)": 189,
        "Body Mass (g)": 3200,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 42.9,
        "Beak Depth (mm)": 17.6,
        "Flipper Length (mm)": 196,
        "Body Mass (g)": 4700,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 36.7,
        "Beak Depth (mm)": 18.8,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 3800,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 35.1,
        "Beak Depth (mm)": 19.4,
        "Flipper Length (mm)": 193,
        "Body Mass (g)": 4200,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 37.3,
        "Beak Depth (mm)": 17.8,
        "Flipper Length (mm)": 191,
        "Body Mass (g)": 3350,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 41.3,
        "Beak Depth (mm)": 20.3,
        "Flipper Length (mm)": 194,
        "Body Mass (g)": 3550,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 36.3,
        "Beak Depth (mm)": 19.5,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3800,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 36.9,
        "Beak Depth (mm)": 18.6,
        "Flipper Length (mm)": 189,
        "Body Mass (g)": 3500,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 38.3,
        "Beak Depth (mm)": 19.2,
        "Flipper Length (mm)": 189,
        "Body Mass (g)": 3950,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 38.9,
        "Beak Depth (mm)": 18.8,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3600,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 35.7,
        "Beak Depth (mm)": 18,
        "Flipper Length (mm)": 202,
        "Body Mass (g)": 3550,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 41.1,
        "Beak Depth (mm)": 18.1,
        "Flipper Length (mm)": 205,
        "Body Mass (g)": 4300,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 34,
        "Beak Depth (mm)": 17.1,
        "Flipper Length (mm)": 185,
        "Body Mass (g)": 3400,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 39.6,
        "Beak Depth (mm)": 18.1,
        "Flipper Length (mm)": 186,
        "Body Mass (g)": 4450,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 36.2,
        "Beak Depth (mm)": 17.3,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 3300,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 40.8,
        "Beak Depth (mm)": 18.9,
        "Flipper Length (mm)": 208,
        "Body Mass (g)": 4300,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 38.1,
        "Beak Depth (mm)": 18.6,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3700,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 40.3,
        "Beak Depth (mm)": 18.5,
        "Flipper Length (mm)": 196,
        "Body Mass (g)": 4350,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 33.1,
        "Beak Depth (mm)": 16.1,
        "Flipper Length (mm)": 178,
        "Body Mass (g)": 2900,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 43.2,
        "Beak Depth (mm)": 18.5,
        "Flipper Length (mm)": 192,
        "Body Mass (g)": 4100,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 35,
        "Beak Depth (mm)": 17.9,
        "Flipper Length (mm)": 192,
        "Body Mass (g)": 3725,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 41,
        "Beak Depth (mm)": 20,
        "Flipper Length (mm)": 203,
        "Body Mass (g)": 4725,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 37.7,
        "Beak Depth (mm)": 16,
        "Flipper Length (mm)": 183,
        "Body Mass (g)": 3075,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 37.8,
        "Beak Depth (mm)": 20,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 4250,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 37.9,
        "Beak Depth (mm)": 18.6,
        "Flipper Length (mm)": 193,
        "Body Mass (g)": 2925,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 39.7,
        "Beak Depth (mm)": 18.9,
        "Flipper Length (mm)": 184,
        "Body Mass (g)": 3550,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 38.6,
        "Beak Depth (mm)": 17.2,
        "Flipper Length (mm)": 199,
        "Body Mass (g)": 3750,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 38.2,
        "Beak Depth (mm)": 20,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3900,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 38.1,
        "Beak Depth (mm)": 17,
        "Flipper Length (mm)": 181,
        "Body Mass (g)": 3175,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 43.2,
        "Beak Depth (mm)": 19,
        "Flipper Length (mm)": 197,
        "Body Mass (g)": 4775,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 38.1,
        "Beak Depth (mm)": 16.5,
        "Flipper Length (mm)": 198,
        "Body Mass (g)": 3825,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.6,
        "Beak Depth (mm)": 20.3,
        "Flipper Length (mm)": 191,
        "Body Mass (g)": 4600,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 39.7,
        "Beak Depth (mm)": 17.7,
        "Flipper Length (mm)": 193,
        "Body Mass (g)": 3200,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 42.2,
        "Beak Depth (mm)": 19.5,
        "Flipper Length (mm)": 197,
        "Body Mass (g)": 4275,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 39.6,
        "Beak Depth (mm)": 20.7,
        "Flipper Length (mm)": 191,
        "Body Mass (g)": 3900,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Biscoe",
        "Beak Length (mm)": 42.7,
        "Beak Depth (mm)": 18.3,
        "Flipper Length (mm)": 196,
        "Body Mass (g)": 4075,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 38.6,
        "Beak Depth (mm)": 17,
        "Flipper Length (mm)": 188,
        "Body Mass (g)": 2900,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 37.3,
        "Beak Depth (mm)": 20.5,
        "Flipper Length (mm)": 199,
        "Body Mass (g)": 3775,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 35.7,
        "Beak Depth (mm)": 17,
        "Flipper Length (mm)": 189,
        "Body Mass (g)": 3350,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 41.1,
        "Beak Depth (mm)": 18.6,
        "Flipper Length (mm)": 189,
        "Body Mass (g)": 3325,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 36.2,
        "Beak Depth (mm)": 17.2,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 3150,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 37.7,
        "Beak Depth (mm)": 19.8,
        "Flipper Length (mm)": 198,
        "Body Mass (g)": 3500,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 40.2,
        "Beak Depth (mm)": 17,
        "Flipper Length (mm)": 176,
        "Body Mass (g)": 3450,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 41.4,
        "Beak Depth (mm)": 18.5,
        "Flipper Length (mm)": 202,
        "Body Mass (g)": 3875,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 35.2,
        "Beak Depth (mm)": 15.9,
        "Flipper Length (mm)": 186,
        "Body Mass (g)": 3050,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 40.6,
        "Beak Depth (mm)": 19,
        "Flipper Length (mm)": 199,
        "Body Mass (g)": 4000,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 38.8,
        "Beak Depth (mm)": 17.6,
        "Flipper Length (mm)": 191,
        "Body Mass (g)": 3275,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 41.5,
        "Beak Depth (mm)": 18.3,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 4300,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 39,
        "Beak Depth (mm)": 17.1,
        "Flipper Length (mm)": 191,
        "Body Mass (g)": 3050,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 44.1,
        "Beak Depth (mm)": 18,
        "Flipper Length (mm)": 210,
        "Body Mass (g)": 4000,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 38.5,
        "Beak Depth (mm)": 17.9,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3325,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Torgersen",
        "Beak Length (mm)": 43.1,
        "Beak Depth (mm)": 19.2,
        "Flipper Length (mm)": 197,
        "Body Mass (g)": 3500,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 36.8,
        "Beak Depth (mm)": 18.5,
        "Flipper Length (mm)": 193,
        "Body Mass (g)": 3500,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 37.5,
        "Beak Depth (mm)": 18.5,
        "Flipper Length (mm)": 199,
        "Body Mass (g)": 4475,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 38.1,
        "Beak Depth (mm)": 17.6,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 3425,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 41.1,
        "Beak Depth (mm)": 17.5,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3900,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 35.6,
        "Beak Depth (mm)": 17.5,
        "Flipper Length (mm)": 191,
        "Body Mass (g)": 3175,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 40.2,
        "Beak Depth (mm)": 20.1,
        "Flipper Length (mm)": 200,
        "Body Mass (g)": 3975,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 37,
        "Beak Depth (mm)": 16.5,
        "Flipper Length (mm)": 185,
        "Body Mass (g)": 3400,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 39.7,
        "Beak Depth (mm)": 17.9,
        "Flipper Length (mm)": 193,
        "Body Mass (g)": 4250,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 40.2,
        "Beak Depth (mm)": 17.1,
        "Flipper Length (mm)": 193,
        "Body Mass (g)": 3400,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 40.6,
        "Beak Depth (mm)": 17.2,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 3475,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 32.1,
        "Beak Depth (mm)": 15.5,
        "Flipper Length (mm)": 188,
        "Body Mass (g)": 3050,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 40.7,
        "Beak Depth (mm)": 17,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3725,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 37.3,
        "Beak Depth (mm)": 16.8,
        "Flipper Length (mm)": 192,
        "Body Mass (g)": 3000,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 39,
        "Beak Depth (mm)": 18.7,
        "Flipper Length (mm)": 185,
        "Body Mass (g)": 3650,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 39.2,
        "Beak Depth (mm)": 18.6,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 4250,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 36.6,
        "Beak Depth (mm)": 18.4,
        "Flipper Length (mm)": 184,
        "Body Mass (g)": 3475,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 36,
        "Beak Depth (mm)": 17.8,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 3450,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 37.8,
        "Beak Depth (mm)": 18.1,
        "Flipper Length (mm)": 193,
        "Body Mass (g)": 3750,
        "Sex": "MALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 36,
        "Beak Depth (mm)": 17.1,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 3700,
        "Sex": "FEMALE"
      },
      {
        "Species": "Adelie",
        "Island": "Dream",
        "Beak Length (mm)": 41.5,
        "Beak Depth (mm)": 18.5,
        "Flipper Length (mm)": 201,
        "Body Mass (g)": 4000,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 46.5,
        "Beak Depth (mm)": 17.9,
        "Flipper Length (mm)": 192,
        "Body Mass (g)": 3500,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 50,
        "Beak Depth (mm)": 19.5,
        "Flipper Length (mm)": 196,
        "Body Mass (g)": 3900,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 51.3,
        "Beak Depth (mm)": 19.2,
        "Flipper Length (mm)": 193,
        "Body Mass (g)": 3650,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 45.4,
        "Beak Depth (mm)": 18.7,
        "Flipper Length (mm)": 188,
        "Body Mass (g)": 3525,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 52.7,
        "Beak Depth (mm)": 19.8,
        "Flipper Length (mm)": 197,
        "Body Mass (g)": 3725,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 45.2,
        "Beak Depth (mm)": 17.8,
        "Flipper Length (mm)": 198,
        "Body Mass (g)": 3950,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 46.1,
        "Beak Depth (mm)": 18.2,
        "Flipper Length (mm)": 178,
        "Body Mass (g)": 3250,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 51.3,
        "Beak Depth (mm)": 18.2,
        "Flipper Length (mm)": 197,
        "Body Mass (g)": 3750,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 46,
        "Beak Depth (mm)": 18.9,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 4150,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 51.3,
        "Beak Depth (mm)": 19.9,
        "Flipper Length (mm)": 198,
        "Body Mass (g)": 3700,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 46.6,
        "Beak Depth (mm)": 17.8,
        "Flipper Length (mm)": 193,
        "Body Mass (g)": 3800,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 51.7,
        "Beak Depth (mm)": 20.3,
        "Flipper Length (mm)": 194,
        "Body Mass (g)": 3775,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 47,
        "Beak Depth (mm)": 17.3,
        "Flipper Length (mm)": 185,
        "Body Mass (g)": 3700,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 52,
        "Beak Depth (mm)": 18.1,
        "Flipper Length (mm)": 201,
        "Body Mass (g)": 4050,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 45.9,
        "Beak Depth (mm)": 17.1,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3575,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 50.5,
        "Beak Depth (mm)": 19.6,
        "Flipper Length (mm)": 201,
        "Body Mass (g)": 4050,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 50.3,
        "Beak Depth (mm)": 20,
        "Flipper Length (mm)": 197,
        "Body Mass (g)": 3300,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 58,
        "Beak Depth (mm)": 17.8,
        "Flipper Length (mm)": 181,
        "Body Mass (g)": 3700,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 46.4,
        "Beak Depth (mm)": 18.6,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3450,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 49.2,
        "Beak Depth (mm)": 18.2,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 4400,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 42.4,
        "Beak Depth (mm)": 17.3,
        "Flipper Length (mm)": 181,
        "Body Mass (g)": 3600,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 48.5,
        "Beak Depth (mm)": 17.5,
        "Flipper Length (mm)": 191,
        "Body Mass (g)": 3400,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 43.2,
        "Beak Depth (mm)": 16.6,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 2900,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 50.6,
        "Beak Depth (mm)": 19.4,
        "Flipper Length (mm)": 193,
        "Body Mass (g)": 3800,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 46.7,
        "Beak Depth (mm)": 17.9,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 3300,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 52,
        "Beak Depth (mm)": 19,
        "Flipper Length (mm)": 197,
        "Body Mass (g)": 4150,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 50.5,
        "Beak Depth (mm)": 18.4,
        "Flipper Length (mm)": 200,
        "Body Mass (g)": 3400,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 49.5,
        "Beak Depth (mm)": 19,
        "Flipper Length (mm)": 200,
        "Body Mass (g)": 3800,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 46.4,
        "Beak Depth (mm)": 17.8,
        "Flipper Length (mm)": 191,
        "Body Mass (g)": 3700,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 52.8,
        "Beak Depth (mm)": 20,
        "Flipper Length (mm)": 205,
        "Body Mass (g)": 4550,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 40.9,
        "Beak Depth (mm)": 16.6,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 3200,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 54.2,
        "Beak Depth (mm)": 20.8,
        "Flipper Length (mm)": 201,
        "Body Mass (g)": 4300,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 42.5,
        "Beak Depth (mm)": 16.7,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 3350,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 51,
        "Beak Depth (mm)": 18.8,
        "Flipper Length (mm)": 203,
        "Body Mass (g)": 4100,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 49.7,
        "Beak Depth (mm)": 18.6,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 3600,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 47.5,
        "Beak Depth (mm)": 16.8,
        "Flipper Length (mm)": 199,
        "Body Mass (g)": 3900,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 47.6,
        "Beak Depth (mm)": 18.3,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 3850,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 52,
        "Beak Depth (mm)": 20.7,
        "Flipper Length (mm)": 210,
        "Body Mass (g)": 4800,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 46.9,
        "Beak Depth (mm)": 16.6,
        "Flipper Length (mm)": 192,
        "Body Mass (g)": 2700,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 53.5,
        "Beak Depth (mm)": 19.9,
        "Flipper Length (mm)": 205,
        "Body Mass (g)": 4500,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 49,
        "Beak Depth (mm)": 19.5,
        "Flipper Length (mm)": 210,
        "Body Mass (g)": 3950,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 46.2,
        "Beak Depth (mm)": 17.5,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 3650,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 50.9,
        "Beak Depth (mm)": 19.1,
        "Flipper Length (mm)": 196,
        "Body Mass (g)": 3550,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 45.5,
        "Beak Depth (mm)": 17,
        "Flipper Length (mm)": 196,
        "Body Mass (g)": 3500,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 50.9,
        "Beak Depth (mm)": 17.9,
        "Flipper Length (mm)": 196,
        "Body Mass (g)": 3675,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 50.8,
        "Beak Depth (mm)": 18.5,
        "Flipper Length (mm)": 201,
        "Body Mass (g)": 4450,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 50.1,
        "Beak Depth (mm)": 17.9,
        "Flipper Length (mm)": 190,
        "Body Mass (g)": 3400,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 49,
        "Beak Depth (mm)": 19.6,
        "Flipper Length (mm)": 212,
        "Body Mass (g)": 4300,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 51.5,
        "Beak Depth (mm)": 18.7,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 3250,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 49.8,
        "Beak Depth (mm)": 17.3,
        "Flipper Length (mm)": 198,
        "Body Mass (g)": 3675,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 48.1,
        "Beak Depth (mm)": 16.4,
        "Flipper Length (mm)": 199,
        "Body Mass (g)": 3325,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 51.4,
        "Beak Depth (mm)": 19,
        "Flipper Length (mm)": 201,
        "Body Mass (g)": 3950,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 45.7,
        "Beak Depth (mm)": 17.3,
        "Flipper Length (mm)": 193,
        "Body Mass (g)": 3600,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 50.7,
        "Beak Depth (mm)": 19.7,
        "Flipper Length (mm)": 203,
        "Body Mass (g)": 4050,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 42.5,
        "Beak Depth (mm)": 17.3,
        "Flipper Length (mm)": 187,
        "Body Mass (g)": 3350,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 52.2,
        "Beak Depth (mm)": 18.8,
        "Flipper Length (mm)": 197,
        "Body Mass (g)": 3450,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 45.2,
        "Beak Depth (mm)": 16.6,
        "Flipper Length (mm)": 191,
        "Body Mass (g)": 3250,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 49.3,
        "Beak Depth (mm)": 19.9,
        "Flipper Length (mm)": 203,
        "Body Mass (g)": 4050,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 50.2,
        "Beak Depth (mm)": 18.8,
        "Flipper Length (mm)": 202,
        "Body Mass (g)": 3800,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 45.6,
        "Beak Depth (mm)": 19.4,
        "Flipper Length (mm)": 194,
        "Body Mass (g)": 3525,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 51.9,
        "Beak Depth (mm)": 19.5,
        "Flipper Length (mm)": 206,
        "Body Mass (g)": 3950,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 46.8,
        "Beak Depth (mm)": 16.5,
        "Flipper Length (mm)": 189,
        "Body Mass (g)": 3650,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 45.7,
        "Beak Depth (mm)": 17,
        "Flipper Length (mm)": 195,
        "Body Mass (g)": 3650,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 55.8,
        "Beak Depth (mm)": 19.8,
        "Flipper Length (mm)": 207,
        "Body Mass (g)": 4000,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 43.5,
        "Beak Depth (mm)": 18.1,
        "Flipper Length (mm)": 202,
        "Body Mass (g)": 3400,
        "Sex": "FEMALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 49.6,
        "Beak Depth (mm)": 18.2,
        "Flipper Length (mm)": 193,
        "Body Mass (g)": 3775,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 50.8,
        "Beak Depth (mm)": 19,
        "Flipper Length (mm)": 210,
        "Body Mass (g)": 4100,
        "Sex": "MALE"
      },
      {
        "Species": "Chinstrap",
        "Island": "Dream",
        "Beak Length (mm)": 50.2,
        "Beak Depth (mm)": 18.7,
        "Flipper Length (mm)": 198,
        "Body Mass (g)": 3775,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.1,
        "Beak Depth (mm)": 13.2,
        "Flipper Length (mm)": 211,
        "Body Mass (g)": 4500,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 50,
        "Beak Depth (mm)": 16.3,
        "Flipper Length (mm)": 230,
        "Body Mass (g)": 5700,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 48.7,
        "Beak Depth (mm)": 14.1,
        "Flipper Length (mm)": 210,
        "Body Mass (g)": 4450,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 50,
        "Beak Depth (mm)": 15.2,
        "Flipper Length (mm)": 218,
        "Body Mass (g)": 5700,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 47.6,
        "Beak Depth (mm)": 14.5,
        "Flipper Length (mm)": 215,
        "Body Mass (g)": 5400,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.5,
        "Beak Depth (mm)": 13.5,
        "Flipper Length (mm)": 210,
        "Body Mass (g)": 4550,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.4,
        "Beak Depth (mm)": 14.6,
        "Flipper Length (mm)": 211,
        "Body Mass (g)": 4800,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.7,
        "Beak Depth (mm)": 15.3,
        "Flipper Length (mm)": 219,
        "Body Mass (g)": 5200,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 43.3,
        "Beak Depth (mm)": 13.4,
        "Flipper Length (mm)": 209,
        "Body Mass (g)": 4400,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.8,
        "Beak Depth (mm)": 15.4,
        "Flipper Length (mm)": 215,
        "Body Mass (g)": 5150,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 40.9,
        "Beak Depth (mm)": 13.7,
        "Flipper Length (mm)": 214,
        "Body Mass (g)": 4650,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 49,
        "Beak Depth (mm)": 16.1,
        "Flipper Length (mm)": 216,
        "Body Mass (g)": 5550,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.5,
        "Beak Depth (mm)": 13.7,
        "Flipper Length (mm)": 214,
        "Body Mass (g)": 4650,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 48.4,
        "Beak Depth (mm)": 14.6,
        "Flipper Length (mm)": 213,
        "Body Mass (g)": 5850,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.8,
        "Beak Depth (mm)": 14.6,
        "Flipper Length (mm)": 210,
        "Body Mass (g)": 4200,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 49.3,
        "Beak Depth (mm)": 15.7,
        "Flipper Length (mm)": 217,
        "Body Mass (g)": 5850,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 42,
        "Beak Depth (mm)": 13.5,
        "Flipper Length (mm)": 210,
        "Body Mass (g)": 4150,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 49.2,
        "Beak Depth (mm)": 15.2,
        "Flipper Length (mm)": 221,
        "Body Mass (g)": 6300,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.2,
        "Beak Depth (mm)": 14.5,
        "Flipper Length (mm)": 209,
        "Body Mass (g)": 4800,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 48.7,
        "Beak Depth (mm)": 15.1,
        "Flipper Length (mm)": 222,
        "Body Mass (g)": 5350,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 50.2,
        "Beak Depth (mm)": 14.3,
        "Flipper Length (mm)": 218,
        "Body Mass (g)": 5700,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.1,
        "Beak Depth (mm)": 14.5,
        "Flipper Length (mm)": 215,
        "Body Mass (g)": 5000,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.5,
        "Beak Depth (mm)": 14.5,
        "Flipper Length (mm)": 213,
        "Body Mass (g)": 4400,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.3,
        "Beak Depth (mm)": 15.8,
        "Flipper Length (mm)": 215,
        "Body Mass (g)": 5050,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 42.9,
        "Beak Depth (mm)": 13.1,
        "Flipper Length (mm)": 215,
        "Body Mass (g)": 5000,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.1,
        "Beak Depth (mm)": 15.1,
        "Flipper Length (mm)": 215,
        "Body Mass (g)": 5100,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 44.5,
        "Beak Depth (mm)": 14.3,
        "Flipper Length (mm)": 216,
        "Body Mass (g)": 4100,
        "Sex": null
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 47.8,
        "Beak Depth (mm)": 15,
        "Flipper Length (mm)": 215,
        "Body Mass (g)": 5650,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 48.2,
        "Beak Depth (mm)": 14.3,
        "Flipper Length (mm)": 210,
        "Body Mass (g)": 4600,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 50,
        "Beak Depth (mm)": 15.3,
        "Flipper Length (mm)": 220,
        "Body Mass (g)": 5550,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 47.3,
        "Beak Depth (mm)": 15.3,
        "Flipper Length (mm)": 222,
        "Body Mass (g)": 5250,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 42.8,
        "Beak Depth (mm)": 14.2,
        "Flipper Length (mm)": 209,
        "Body Mass (g)": 4700,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.1,
        "Beak Depth (mm)": 14.5,
        "Flipper Length (mm)": 207,
        "Body Mass (g)": 5050,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 59.6,
        "Beak Depth (mm)": 17,
        "Flipper Length (mm)": 230,
        "Body Mass (g)": 6050,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 49.1,
        "Beak Depth (mm)": 14.8,
        "Flipper Length (mm)": 220,
        "Body Mass (g)": 5150,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 48.4,
        "Beak Depth (mm)": 16.3,
        "Flipper Length (mm)": 220,
        "Body Mass (g)": 5400,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 42.6,
        "Beak Depth (mm)": 13.7,
        "Flipper Length (mm)": 213,
        "Body Mass (g)": 4950,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 44.4,
        "Beak Depth (mm)": 17.3,
        "Flipper Length (mm)": 219,
        "Body Mass (g)": 5250,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 44,
        "Beak Depth (mm)": 13.6,
        "Flipper Length (mm)": 208,
        "Body Mass (g)": 4350,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 48.7,
        "Beak Depth (mm)": 15.7,
        "Flipper Length (mm)": 208,
        "Body Mass (g)": 5350,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 42.7,
        "Beak Depth (mm)": 13.7,
        "Flipper Length (mm)": 208,
        "Body Mass (g)": 3950,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 49.6,
        "Beak Depth (mm)": 16,
        "Flipper Length (mm)": 225,
        "Body Mass (g)": 5700,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.3,
        "Beak Depth (mm)": 13.7,
        "Flipper Length (mm)": 210,
        "Body Mass (g)": 4300,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 49.6,
        "Beak Depth (mm)": 15,
        "Flipper Length (mm)": 216,
        "Body Mass (g)": 4750,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 50.5,
        "Beak Depth (mm)": 15.9,
        "Flipper Length (mm)": 222,
        "Body Mass (g)": 5550,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 43.6,
        "Beak Depth (mm)": 13.9,
        "Flipper Length (mm)": 217,
        "Body Mass (g)": 4900,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.5,
        "Beak Depth (mm)": 13.9,
        "Flipper Length (mm)": 210,
        "Body Mass (g)": 4200,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 50.5,
        "Beak Depth (mm)": 15.9,
        "Flipper Length (mm)": 225,
        "Body Mass (g)": 5400,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 44.9,
        "Beak Depth (mm)": 13.3,
        "Flipper Length (mm)": 213,
        "Body Mass (g)": 5100,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.2,
        "Beak Depth (mm)": 15.8,
        "Flipper Length (mm)": 215,
        "Body Mass (g)": 5300,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.6,
        "Beak Depth (mm)": 14.2,
        "Flipper Length (mm)": 210,
        "Body Mass (g)": 4850,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 48.5,
        "Beak Depth (mm)": 14.1,
        "Flipper Length (mm)": 220,
        "Body Mass (g)": 5300,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.1,
        "Beak Depth (mm)": 14.4,
        "Flipper Length (mm)": 210,
        "Body Mass (g)": 4400,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 50.1,
        "Beak Depth (mm)": 15,
        "Flipper Length (mm)": 225,
        "Body Mass (g)": 5000,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.5,
        "Beak Depth (mm)": 14.4,
        "Flipper Length (mm)": 217,
        "Body Mass (g)": 4900,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45,
        "Beak Depth (mm)": 15.4,
        "Flipper Length (mm)": 220,
        "Body Mass (g)": 5050,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 43.8,
        "Beak Depth (mm)": 13.9,
        "Flipper Length (mm)": 208,
        "Body Mass (g)": 4300,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.5,
        "Beak Depth (mm)": 15,
        "Flipper Length (mm)": 220,
        "Body Mass (g)": 5000,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 43.2,
        "Beak Depth (mm)": 14.5,
        "Flipper Length (mm)": 208,
        "Body Mass (g)": 4450,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 50.4,
        "Beak Depth (mm)": 15.3,
        "Flipper Length (mm)": 224,
        "Body Mass (g)": 5550,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.3,
        "Beak Depth (mm)": 13.8,
        "Flipper Length (mm)": 208,
        "Body Mass (g)": 4200,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.2,
        "Beak Depth (mm)": 14.9,
        "Flipper Length (mm)": 221,
        "Body Mass (g)": 5300,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.7,
        "Beak Depth (mm)": 13.9,
        "Flipper Length (mm)": 214,
        "Body Mass (g)": 4400,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 54.3,
        "Beak Depth (mm)": 15.7,
        "Flipper Length (mm)": 231,
        "Body Mass (g)": 5650,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.8,
        "Beak Depth (mm)": 14.2,
        "Flipper Length (mm)": 219,
        "Body Mass (g)": 4700,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 49.8,
        "Beak Depth (mm)": 16.8,
        "Flipper Length (mm)": 230,
        "Body Mass (g)": 5700,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.2,
        "Beak Depth (mm)": 14.4,
        "Flipper Length (mm)": 214,
        "Body Mass (g)": 4650,
        "Sex": null
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 49.5,
        "Beak Depth (mm)": 16.2,
        "Flipper Length (mm)": 229,
        "Body Mass (g)": 5800,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 43.5,
        "Beak Depth (mm)": 14.2,
        "Flipper Length (mm)": 220,
        "Body Mass (g)": 4700,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 50.7,
        "Beak Depth (mm)": 15,
        "Flipper Length (mm)": 223,
        "Body Mass (g)": 5550,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 47.7,
        "Beak Depth (mm)": 15,
        "Flipper Length (mm)": 216,
        "Body Mass (g)": 4750,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.4,
        "Beak Depth (mm)": 15.6,
        "Flipper Length (mm)": 221,
        "Body Mass (g)": 5000,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 48.2,
        "Beak Depth (mm)": 15.6,
        "Flipper Length (mm)": 221,
        "Body Mass (g)": 5100,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.5,
        "Beak Depth (mm)": 14.8,
        "Flipper Length (mm)": 217,
        "Body Mass (g)": 5200,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.4,
        "Beak Depth (mm)": 15,
        "Flipper Length (mm)": 216,
        "Body Mass (g)": 4700,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 48.6,
        "Beak Depth (mm)": 16,
        "Flipper Length (mm)": 230,
        "Body Mass (g)": 5800,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 47.5,
        "Beak Depth (mm)": 14.2,
        "Flipper Length (mm)": 209,
        "Body Mass (g)": 4600,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 51.1,
        "Beak Depth (mm)": 16.3,
        "Flipper Length (mm)": 220,
        "Body Mass (g)": 6000,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.2,
        "Beak Depth (mm)": 13.8,
        "Flipper Length (mm)": 215,
        "Body Mass (g)": 4750,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.2,
        "Beak Depth (mm)": 16.4,
        "Flipper Length (mm)": 223,
        "Body Mass (g)": 5950,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 49.1,
        "Beak Depth (mm)": 14.5,
        "Flipper Length (mm)": 212,
        "Body Mass (g)": 4625,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 52.5,
        "Beak Depth (mm)": 15.6,
        "Flipper Length (mm)": 221,
        "Body Mass (g)": 5450,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 47.4,
        "Beak Depth (mm)": 14.6,
        "Flipper Length (mm)": 212,
        "Body Mass (g)": 4725,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 50,
        "Beak Depth (mm)": 15.9,
        "Flipper Length (mm)": 224,
        "Body Mass (g)": 5350,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 44.9,
        "Beak Depth (mm)": 13.8,
        "Flipper Length (mm)": 212,
        "Body Mass (g)": 4750,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 50.8,
        "Beak Depth (mm)": 17.3,
        "Flipper Length (mm)": 228,
        "Body Mass (g)": 5600,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 43.4,
        "Beak Depth (mm)": 14.4,
        "Flipper Length (mm)": 218,
        "Body Mass (g)": 4600,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 51.3,
        "Beak Depth (mm)": 14.2,
        "Flipper Length (mm)": 218,
        "Body Mass (g)": 5300,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 47.5,
        "Beak Depth (mm)": 14,
        "Flipper Length (mm)": 212,
        "Body Mass (g)": 4875,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 52.1,
        "Beak Depth (mm)": 17,
        "Flipper Length (mm)": 230,
        "Body Mass (g)": 5550,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 47.5,
        "Beak Depth (mm)": 15,
        "Flipper Length (mm)": 218,
        "Body Mass (g)": 4950,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 52.2,
        "Beak Depth (mm)": 17.1,
        "Flipper Length (mm)": 228,
        "Body Mass (g)": 5400,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.5,
        "Beak Depth (mm)": 14.5,
        "Flipper Length (mm)": 212,
        "Body Mass (g)": 4750,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 49.5,
        "Beak Depth (mm)": 16.1,
        "Flipper Length (mm)": 224,
        "Body Mass (g)": 5650,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 44.5,
        "Beak Depth (mm)": 14.7,
        "Flipper Length (mm)": 214,
        "Body Mass (g)": 4850,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 50.8,
        "Beak Depth (mm)": 15.7,
        "Flipper Length (mm)": 226,
        "Body Mass (g)": 5200,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 49.4,
        "Beak Depth (mm)": 15.8,
        "Flipper Length (mm)": 216,
        "Body Mass (g)": 4925,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.9,
        "Beak Depth (mm)": 14.6,
        "Flipper Length (mm)": 222,
        "Body Mass (g)": 4875,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 48.4,
        "Beak Depth (mm)": 14.4,
        "Flipper Length (mm)": 203,
        "Body Mass (g)": 4625,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 51.1,
        "Beak Depth (mm)": 16.5,
        "Flipper Length (mm)": 225,
        "Body Mass (g)": 5250,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 48.5,
        "Beak Depth (mm)": 15,
        "Flipper Length (mm)": 219,
        "Body Mass (g)": 4850,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 55.9,
        "Beak Depth (mm)": 17,
        "Flipper Length (mm)": 228,
        "Body Mass (g)": 5600,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 47.2,
        "Beak Depth (mm)": 15.5,
        "Flipper Length (mm)": 215,
        "Body Mass (g)": 4975,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 49.1,
        "Beak Depth (mm)": 15,
        "Flipper Length (mm)": 228,
        "Body Mass (g)": 5500,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 47.3,
        "Beak Depth (mm)": 13.8,
        "Flipper Length (mm)": 216,
        "Body Mass (g)": 4725,
        "Sex": null
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.8,
        "Beak Depth (mm)": 16.1,
        "Flipper Length (mm)": 215,
        "Body Mass (g)": 5500,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 41.7,
        "Beak Depth (mm)": 14.7,
        "Flipper Length (mm)": 210,
        "Body Mass (g)": 4700,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 53.4,
        "Beak Depth (mm)": 15.8,
        "Flipper Length (mm)": 219,
        "Body Mass (g)": 5500,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 43.3,
        "Beak Depth (mm)": 14,
        "Flipper Length (mm)": 208,
        "Body Mass (g)": 4575,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 48.1,
        "Beak Depth (mm)": 15.1,
        "Flipper Length (mm)": 209,
        "Body Mass (g)": 5500,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 50.5,
        "Beak Depth (mm)": 15.2,
        "Flipper Length (mm)": 216,
        "Body Mass (g)": 5000,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 49.8,
        "Beak Depth (mm)": 15.9,
        "Flipper Length (mm)": 229,
        "Body Mass (g)": 5950,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 43.5,
        "Beak Depth (mm)": 15.2,
        "Flipper Length (mm)": 213,
        "Body Mass (g)": 4650,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 51.5,
        "Beak Depth (mm)": 16.3,
        "Flipper Length (mm)": 230,
        "Body Mass (g)": 5500,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.2,
        "Beak Depth (mm)": 14.1,
        "Flipper Length (mm)": 217,
        "Body Mass (g)": 4375,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 55.1,
        "Beak Depth (mm)": 16,
        "Flipper Length (mm)": 230,
        "Body Mass (g)": 5850,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 44.5,
        "Beak Depth (mm)": 15.7,
        "Flipper Length (mm)": 217,
        "Body Mass (g)": 4875,
        "Sex": "."
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 48.8,
        "Beak Depth (mm)": 16.2,
        "Flipper Length (mm)": 222,
        "Body Mass (g)": 6000,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 47.2,
        "Beak Depth (mm)": 13.7,
        "Flipper Length (mm)": 214,
        "Body Mass (g)": 4925,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": null,
        "Beak Depth (mm)": null,
        "Flipper Length (mm)": null,
        "Body Mass (g)": null,
        "Sex": null
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 46.8,
        "Beak Depth (mm)": 14.3,
        "Flipper Length (mm)": 215,
        "Body Mass (g)": 4850,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 50.4,
        "Beak Depth (mm)": 15.7,
        "Flipper Length (mm)": 222,
        "Body Mass (g)": 5750,
        "Sex": "MALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 45.2,
        "Beak Depth (mm)": 14.8,
        "Flipper Length (mm)": 212,
        "Body Mass (g)": 5200,
        "Sex": "FEMALE"
      },
      {
        "Species": "Gentoo",
        "Island": "Biscoe",
        "Beak Length (mm)": 49.9,
        "Beak Depth (mm)": 16.1,
        "Flipper Length (mm)": 213,
        "Body Mass (g)": 5400,
        "Sex": "MALE"
      }
    ]
  },
  "mark": "point",
  "encoding": {
    "x": {
      "field": "Flipper Length (mm)",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "y": {
      "field": "Body Mass (g)",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "color": {"field": "Species", "type": "nominal"},
    "shape": {"field": "Species", "type": "nominal"}
  }
}
```

### Line Chart with Point Markers

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Stock prices of 5 Tech Companies over Time.",
  "data": {
    "values": "symbol,date,price\nMSFT,Jan 1 2000,39.81\nMSFT,Feb 1 2000,36.35\nMSFT,Mar 1 2000,43.22\nMSFT,Apr 1 2000,28.37\nMSFT,May 1 2000,25.45\nMSFT,Jun 1 2000,32.54\nMSFT,Jul 1 2000,28.4\nMSFT,Aug 1 2000,28.4\nMSFT,Sep 1 2000,24.53\nMSFT,Oct 1 2000,28.02\nMSFT,Nov 1 2000,23.34\nMSFT,Dec 1 2000,17.65\nMSFT,Jan 1 2001,24.84\nMSFT,Feb 1 2001,24\nMSFT,Mar 1 2001,22.25\nMSFT,Apr 1 2001,27.56\nMSFT,May 1 2001,28.14\nMSFT,Jun 1 2001,29.7\nMSFT,Jul 1 2001,26.93\nMSFT,Aug 1 2001,23.21\nMSFT,Sep 1 2001,20.82\nMSFT,Oct 1 2001,23.65\nMSFT,Nov 1 2001,26.12\nMSFT,Dec 1 2001,26.95\nMSFT,Jan 1 2002,25.92\nMSFT,Feb 1 2002,23.73\nMSFT,Mar 1 2002,24.53\nMSFT,Apr 1 2002,21.26\nMSFT,May 1 2002,20.71\nMSFT,Jun 1 2002,22.25\nMSFT,Jul 1 2002,19.52\nMSFT,Aug 1 2002,19.97\nMSFT,Sep 1 2002,17.79\nMSFT,Oct 1 2002,21.75\nMSFT,Nov 1 2002,23.46\nMSFT,Dec 1 2002,21.03\nMSFT,Jan 1 2003,19.31\nMSFT,Feb 1 2003,19.34\nMSFT,Mar 1 2003,19.76\nMSFT,Apr 1 2003,20.87\nMSFT,May 1 2003,20.09\nMSFT,Jun 1 2003,20.93\nMSFT,Jul 1 2003,21.56\nMSFT,Aug 1 2003,21.65\nMSFT,Sep 1 2003,22.69\nMSFT,Oct 1 2003,21.45\nMSFT,Nov 1 2003,21.1\nMSFT,Dec 1 2003,22.46\nMSFT,Jan 1 2004,22.69\nMSFT,Feb 1 2004,21.77\nMSFT,Mar 1 2004,20.46\nMSFT,Apr 1 2004,21.45\nMSFT,May 1 2004,21.53\nMSFT,Jun 1 2004,23.44\nMSFT,Jul 1 2004,23.38\nMSFT,Aug 1 2004,22.47\nMSFT,Sep 1 2004,22.76\nMSFT,Oct 1 2004,23.02\nMSFT,Nov 1 2004,24.6\nMSFT,Dec 1 2004,24.52\nMSFT,Jan 1 2005,24.11\nMSFT,Feb 1 2005,23.15\nMSFT,Mar 1 2005,22.24\nMSFT,Apr 1 2005,23.28\nMSFT,May 1 2005,23.82\nMSFT,Jun 1 2005,22.93\nMSFT,Jul 1 2005,23.64\nMSFT,Aug 1 2005,25.35\nMSFT,Sep 1 2005,23.83\nMSFT,Oct 1 2005,23.8\nMSFT,Nov 1 2005,25.71\nMSFT,Dec 1 2005,24.29\nMSFT,Jan 1 2006,26.14\nMSFT,Feb 1 2006,25.04\nMSFT,Mar 1 2006,25.36\nMSFT,Apr 1 2006,22.5\nMSFT,May 1 2006,21.19\nMSFT,Jun 1 2006,21.8\nMSFT,Jul 1 2006,22.51\nMSFT,Aug 1 2006,24.13\nMSFT,Sep 1 2006,25.68\nMSFT,Oct 1 2006,26.96\nMSFT,Nov 1 2006,27.66\nMSFT,Dec 1 2006,28.13\nMSFT,Jan 1 2007,29.07\nMSFT,Feb 1 2007,26.63\nMSFT,Mar 1 2007,26.35\nMSFT,Apr 1 2007,28.3\nMSFT,May 1 2007,29.11\nMSFT,Jun 1 2007,27.95\nMSFT,Jul 1 2007,27.5\nMSFT,Aug 1 2007,27.34\nMSFT,Sep 1 2007,28.04\nMSFT,Oct 1 2007,35.03\nMSFT,Nov 1 2007,32.09\nMSFT,Dec 1 2007,34\nMSFT,Jan 1 2008,31.13\nMSFT,Feb 1 2008,26.07\nMSFT,Mar 1 2008,27.21\nMSFT,Apr 1 2008,27.34\nMSFT,May 1 2008,27.25\nMSFT,Jun 1 2008,26.47\nMSFT,Jul 1 2008,24.75\nMSFT,Aug 1 2008,26.36\nMSFT,Sep 1 2008,25.78\nMSFT,Oct 1 2008,21.57\nMSFT,Nov 1 2008,19.66\nMSFT,Dec 1 2008,18.91\nMSFT,Jan 1 2009,16.63\nMSFT,Feb 1 2009,15.81\nMSFT,Mar 1 2009,17.99\nMSFT,Apr 1 2009,19.84\nMSFT,May 1 2009,20.59\nMSFT,Jun 1 2009,23.42\nMSFT,Jul 1 2009,23.18\nMSFT,Aug 1 2009,24.43\nMSFT,Sep 1 2009,25.49\nMSFT,Oct 1 2009,27.48\nMSFT,Nov 1 2009,29.27\nMSFT,Dec 1 2009,30.34\nMSFT,Jan 1 2010,28.05\nMSFT,Feb 1 2010,28.67\nMSFT,Mar 1 2010,28.8\nAMZN,Jan 1 2000,64.56\nAMZN,Feb 1 2000,68.87\nAMZN,Mar 1 2000,67\nAMZN,Apr 1 2000,55.19\nAMZN,May 1 2000,48.31\nAMZN,Jun 1 2000,36.31\nAMZN,Jul 1 2000,30.12\nAMZN,Aug 1 2000,41.5\nAMZN,Sep 1 2000,38.44\nAMZN,Oct 1 2000,36.62\nAMZN,Nov 1 2000,24.69\nAMZN,Dec 1 2000,15.56\nAMZN,Jan 1 2001,17.31\nAMZN,Feb 1 2001,10.19\nAMZN,Mar 1 2001,10.23\nAMZN,Apr 1 2001,15.78\nAMZN,May 1 2001,16.69\nAMZN,Jun 1 2001,14.15\nAMZN,Jul 1 2001,12.49\nAMZN,Aug 1 2001,8.94\nAMZN,Sep 1 2001,5.97\nAMZN,Oct 1 2001,6.98\nAMZN,Nov 1 2001,11.32\nAMZN,Dec 1 2001,10.82\nAMZN,Jan 1 2002,14.19\nAMZN,Feb 1 2002,14.1\nAMZN,Mar 1 2002,14.3\nAMZN,Apr 1 2002,16.69\nAMZN,May 1 2002,18.23\nAMZN,Jun 1 2002,16.25\nAMZN,Jul 1 2002,14.45\nAMZN,Aug 1 2002,14.94\nAMZN,Sep 1 2002,15.93\nAMZN,Oct 1 2002,19.36\nAMZN,Nov 1 2002,23.35\nAMZN,Dec 1 2002,18.89\nAMZN,Jan 1 2003,21.85\nAMZN,Feb 1 2003,22.01\nAMZN,Mar 1 2003,26.03\nAMZN,Apr 1 2003,28.69\nAMZN,May 1 2003,35.89\nAMZN,Jun 1 2003,36.32\nAMZN,Jul 1 2003,41.64\nAMZN,Aug 1 2003,46.32\nAMZN,Sep 1 2003,48.43\nAMZN,Oct 1 2003,54.43\nAMZN,Nov 1 2003,53.97\nAMZN,Dec 1 2003,52.62\nAMZN,Jan 1 2004,50.4\nAMZN,Feb 1 2004,43.01\nAMZN,Mar 1 2004,43.28\nAMZN,Apr 1 2004,43.6\nAMZN,May 1 2004,48.5\nAMZN,Jun 1 2004,54.4\nAMZN,Jul 1 2004,38.92\nAMZN,Aug 1 2004,38.14\nAMZN,Sep 1 2004,40.86\nAMZN,Oct 1 2004,34.13\nAMZN,Nov 1 2004,39.68\nAMZN,Dec 1 2004,44.29\nAMZN,Jan 1 2005,43.22\nAMZN,Feb 1 2005,35.18\nAMZN,Mar 1 2005,34.27\nAMZN,Apr 1 2005,32.36\nAMZN,May 1 2005,35.51\nAMZN,Jun 1 2005,33.09\nAMZN,Jul 1 2005,45.15\nAMZN,Aug 1 2005,42.7\nAMZN,Sep 1 2005,45.3\nAMZN,Oct 1 2005,39.86\nAMZN,Nov 1 2005,48.46\nAMZN,Dec 1 2005,47.15\nAMZN,Jan 1 2006,44.82\nAMZN,Feb 1 2006,37.44\nAMZN,Mar 1 2006,36.53\nAMZN,Apr 1 2006,35.21\nAMZN,May 1 2006,34.61\nAMZN,Jun 1 2006,38.68\nAMZN,Jul 1 2006,26.89\nAMZN,Aug 1 2006,30.83\nAMZN,Sep 1 2006,32.12\nAMZN,Oct 1 2006,38.09\nAMZN,Nov 1 2006,40.34\nAMZN,Dec 1 2006,39.46\nAMZN,Jan 1 2007,37.67\nAMZN,Feb 1 2007,39.14\nAMZN,Mar 1 2007,39.79\nAMZN,Apr 1 2007,61.33\nAMZN,May 1 2007,69.14\nAMZN,Jun 1 2007,68.41\nAMZN,Jul 1 2007,78.54\nAMZN,Aug 1 2007,79.91\nAMZN,Sep 1 2007,93.15\nAMZN,Oct 1 2007,89.15\nAMZN,Nov 1 2007,90.56\nAMZN,Dec 1 2007,92.64\nAMZN,Jan 1 2008,77.7\nAMZN,Feb 1 2008,64.47\nAMZN,Mar 1 2008,71.3\nAMZN,Apr 1 2008,78.63\nAMZN,May 1 2008,81.62\nAMZN,Jun 1 2008,73.33\nAMZN,Jul 1 2008,76.34\nAMZN,Aug 1 2008,80.81\nAMZN,Sep 1 2008,72.76\nAMZN,Oct 1 2008,57.24\nAMZN,Nov 1 2008,42.7\nAMZN,Dec 1 2008,51.28\nAMZN,Jan 1 2009,58.82\nAMZN,Feb 1 2009,64.79\nAMZN,Mar 1 2009,73.44\nAMZN,Apr 1 2009,80.52\nAMZN,May 1 2009,77.99\nAMZN,Jun 1 2009,83.66\nAMZN,Jul 1 2009,85.76\nAMZN,Aug 1 2009,81.19\nAMZN,Sep 1 2009,93.36\nAMZN,Oct 1 2009,118.81\nAMZN,Nov 1 2009,135.91\nAMZN,Dec 1 2009,134.52\nAMZN,Jan 1 2010,125.41\nAMZN,Feb 1 2010,118.4\nAMZN,Mar 1 2010,128.82\nIBM,Jan 1 2000,100.52\nIBM,Feb 1 2000,92.11\nIBM,Mar 1 2000,106.11\nIBM,Apr 1 2000,99.95\nIBM,May 1 2000,96.31\nIBM,Jun 1 2000,98.33\nIBM,Jul 1 2000,100.74\nIBM,Aug 1 2000,118.62\nIBM,Sep 1 2000,101.19\nIBM,Oct 1 2000,88.5\nIBM,Nov 1 2000,84.12\nIBM,Dec 1 2000,76.47\nIBM,Jan 1 2001,100.76\nIBM,Feb 1 2001,89.98\nIBM,Mar 1 2001,86.63\nIBM,Apr 1 2001,103.7\nIBM,May 1 2001,100.82\nIBM,Jun 1 2001,102.35\nIBM,Jul 1 2001,94.87\nIBM,Aug 1 2001,90.25\nIBM,Sep 1 2001,82.82\nIBM,Oct 1 2001,97.58\nIBM,Nov 1 2001,104.5\nIBM,Dec 1 2001,109.36\nIBM,Jan 1 2002,97.54\nIBM,Feb 1 2002,88.82\nIBM,Mar 1 2002,94.15\nIBM,Apr 1 2002,75.82\nIBM,May 1 2002,72.97\nIBM,Jun 1 2002,65.31\nIBM,Jul 1 2002,63.86\nIBM,Aug 1 2002,68.52\nIBM,Sep 1 2002,53.01\nIBM,Oct 1 2002,71.76\nIBM,Nov 1 2002,79.16\nIBM,Dec 1 2002,70.58\nIBM,Jan 1 2003,71.22\nIBM,Feb 1 2003,71.13\nIBM,Mar 1 2003,71.57\nIBM,Apr 1 2003,77.47\nIBM,May 1 2003,80.48\nIBM,Jun 1 2003,75.42\nIBM,Jul 1 2003,74.28\nIBM,Aug 1 2003,75.12\nIBM,Sep 1 2003,80.91\nIBM,Oct 1 2003,81.96\nIBM,Nov 1 2003,83.08\nIBM,Dec 1 2003,85.05\nIBM,Jan 1 2004,91.06\nIBM,Feb 1 2004,88.7\nIBM,Mar 1 2004,84.41\nIBM,Apr 1 2004,81.04\nIBM,May 1 2004,81.59\nIBM,Jun 1 2004,81.19\nIBM,Jul 1 2004,80.19\nIBM,Aug 1 2004,78.17\nIBM,Sep 1 2004,79.13\nIBM,Oct 1 2004,82.84\nIBM,Nov 1 2004,87.15\nIBM,Dec 1 2004,91.16\nIBM,Jan 1 2005,86.39\nIBM,Feb 1 2005,85.78\nIBM,Mar 1 2005,84.66\nIBM,Apr 1 2005,70.77\nIBM,May 1 2005,70.18\nIBM,Jun 1 2005,68.93\nIBM,Jul 1 2005,77.53\nIBM,Aug 1 2005,75.07\nIBM,Sep 1 2005,74.7\nIBM,Oct 1 2005,76.25\nIBM,Nov 1 2005,82.98\nIBM,Dec 1 2005,76.73\nIBM,Jan 1 2006,75.89\nIBM,Feb 1 2006,75.09\nIBM,Mar 1 2006,77.17\nIBM,Apr 1 2006,77.05\nIBM,May 1 2006,75.04\nIBM,Jun 1 2006,72.15\nIBM,Jul 1 2006,72.7\nIBM,Aug 1 2006,76.35\nIBM,Sep 1 2006,77.26\nIBM,Oct 1 2006,87.06\nIBM,Nov 1 2006,86.95\nIBM,Dec 1 2006,91.9\nIBM,Jan 1 2007,93.79\nIBM,Feb 1 2007,88.18\nIBM,Mar 1 2007,89.44\nIBM,Apr 1 2007,96.98\nIBM,May 1 2007,101.54\nIBM,Jun 1 2007,100.25\nIBM,Jul 1 2007,105.4\nIBM,Aug 1 2007,111.54\nIBM,Sep 1 2007,112.6\nIBM,Oct 1 2007,111\nIBM,Nov 1 2007,100.9\nIBM,Dec 1 2007,103.7\nIBM,Jan 1 2008,102.75\nIBM,Feb 1 2008,109.64\nIBM,Mar 1 2008,110.87\nIBM,Apr 1 2008,116.23\nIBM,May 1 2008,125.14\nIBM,Jun 1 2008,114.6\nIBM,Jul 1 2008,123.74\nIBM,Aug 1 2008,118.16\nIBM,Sep 1 2008,113.53\nIBM,Oct 1 2008,90.24\nIBM,Nov 1 2008,79.65\nIBM,Dec 1 2008,82.15\nIBM,Jan 1 2009,89.46\nIBM,Feb 1 2009,90.32\nIBM,Mar 1 2009,95.09\nIBM,Apr 1 2009,101.29\nIBM,May 1 2009,104.85\nIBM,Jun 1 2009,103.01\nIBM,Jul 1 2009,116.34\nIBM,Aug 1 2009,117\nIBM,Sep 1 2009,118.55\nIBM,Oct 1 2009,119.54\nIBM,Nov 1 2009,125.79\nIBM,Dec 1 2009,130.32\nIBM,Jan 1 2010,121.85\nIBM,Feb 1 2010,127.16\nIBM,Mar 1 2010,125.55\nGOOG,Aug 1 2004,102.37\nGOOG,Sep 1 2004,129.6\nGOOG,Oct 1 2004,190.64\nGOOG,Nov 1 2004,181.98\nGOOG,Dec 1 2004,192.79\nGOOG,Jan 1 2005,195.62\nGOOG,Feb 1 2005,187.99\nGOOG,Mar 1 2005,180.51\nGOOG,Apr 1 2005,220\nGOOG,May 1 2005,277.27\nGOOG,Jun 1 2005,294.15\nGOOG,Jul 1 2005,287.76\nGOOG,Aug 1 2005,286\nGOOG,Sep 1 2005,316.46\nGOOG,Oct 1 2005,372.14\nGOOG,Nov 1 2005,404.91\nGOOG,Dec 1 2005,414.86\nGOOG,Jan 1 2006,432.66\nGOOG,Feb 1 2006,362.62\nGOOG,Mar 1 2006,390\nGOOG,Apr 1 2006,417.94\nGOOG,May 1 2006,371.82\nGOOG,Jun 1 2006,419.33\nGOOG,Jul 1 2006,386.6\nGOOG,Aug 1 2006,378.53\nGOOG,Sep 1 2006,401.9\nGOOG,Oct 1 2006,476.39\nGOOG,Nov 1 2006,484.81\nGOOG,Dec 1 2006,460.48\nGOOG,Jan 1 2007,501.5\nGOOG,Feb 1 2007,449.45\nGOOG,Mar 1 2007,458.16\nGOOG,Apr 1 2007,471.38\nGOOG,May 1 2007,497.91\nGOOG,Jun 1 2007,522.7\nGOOG,Jul 1 2007,510\nGOOG,Aug 1 2007,515.25\nGOOG,Sep 1 2007,567.27\nGOOG,Oct 1 2007,707\nGOOG,Nov 1 2007,693\nGOOG,Dec 1 2007,691.48\nGOOG,Jan 1 2008,564.3\nGOOG,Feb 1 2008,471.18\nGOOG,Mar 1 2008,440.47\nGOOG,Apr 1 2008,574.29\nGOOG,May 1 2008,585.8\nGOOG,Jun 1 2008,526.42\nGOOG,Jul 1 2008,473.75\nGOOG,Aug 1 2008,463.29\nGOOG,Sep 1 2008,400.52\nGOOG,Oct 1 2008,359.36\nGOOG,Nov 1 2008,292.96\nGOOG,Dec 1 2008,307.65\nGOOG,Jan 1 2009,338.53\nGOOG,Feb 1 2009,337.99\nGOOG,Mar 1 2009,348.06\nGOOG,Apr 1 2009,395.97\nGOOG,May 1 2009,417.23\nGOOG,Jun 1 2009,421.59\nGOOG,Jul 1 2009,443.05\nGOOG,Aug 1 2009,461.67\nGOOG,Sep 1 2009,495.85\nGOOG,Oct 1 2009,536.12\nGOOG,Nov 1 2009,583\nGOOG,Dec 1 2009,619.98\nGOOG,Jan 1 2010,529.94\nGOOG,Feb 1 2010,526.8\nGOOG,Mar 1 2010,560.19\nAAPL,Jan 1 2000,25.94\nAAPL,Feb 1 2000,28.66\nAAPL,Mar 1 2000,33.95\nAAPL,Apr 1 2000,31.01\nAAPL,May 1 2000,21\nAAPL,Jun 1 2000,26.19\nAAPL,Jul 1 2000,25.41\nAAPL,Aug 1 2000,30.47\nAAPL,Sep 1 2000,12.88\nAAPL,Oct 1 2000,9.78\nAAPL,Nov 1 2000,8.25\nAAPL,Dec 1 2000,7.44\nAAPL,Jan 1 2001,10.81\nAAPL,Feb 1 2001,9.12\nAAPL,Mar 1 2001,11.03\nAAPL,Apr 1 2001,12.74\nAAPL,May 1 2001,9.98\nAAPL,Jun 1 2001,11.62\nAAPL,Jul 1 2001,9.4\nAAPL,Aug 1 2001,9.27\nAAPL,Sep 1 2001,7.76\nAAPL,Oct 1 2001,8.78\nAAPL,Nov 1 2001,10.65\nAAPL,Dec 1 2001,10.95\nAAPL,Jan 1 2002,12.36\nAAPL,Feb 1 2002,10.85\nAAPL,Mar 1 2002,11.84\nAAPL,Apr 1 2002,12.14\nAAPL,May 1 2002,11.65\nAAPL,Jun 1 2002,8.86\nAAPL,Jul 1 2002,7.63\nAAPL,Aug 1 2002,7.38\nAAPL,Sep 1 2002,7.25\nAAPL,Oct 1 2002,8.03\nAAPL,Nov 1 2002,7.75\nAAPL,Dec 1 2002,7.16\nAAPL,Jan 1 2003,7.18\nAAPL,Feb 1 2003,7.51\nAAPL,Mar 1 2003,7.07\nAAPL,Apr 1 2003,7.11\nAAPL,May 1 2003,8.98\nAAPL,Jun 1 2003,9.53\nAAPL,Jul 1 2003,10.54\nAAPL,Aug 1 2003,11.31\nAAPL,Sep 1 2003,10.36\nAAPL,Oct 1 2003,11.44\nAAPL,Nov 1 2003,10.45\nAAPL,Dec 1 2003,10.69\nAAPL,Jan 1 2004,11.28\nAAPL,Feb 1 2004,11.96\nAAPL,Mar 1 2004,13.52\nAAPL,Apr 1 2004,12.89\nAAPL,May 1 2004,14.03\nAAPL,Jun 1 2004,16.27\nAAPL,Jul 1 2004,16.17\nAAPL,Aug 1 2004,17.25\nAAPL,Sep 1 2004,19.38\nAAPL,Oct 1 2004,26.2\nAAPL,Nov 1 2004,33.53\nAAPL,Dec 1 2004,32.2\nAAPL,Jan 1 2005,38.45\nAAPL,Feb 1 2005,44.86\nAAPL,Mar 1 2005,41.67\nAAPL,Apr 1 2005,36.06\nAAPL,May 1 2005,39.76\nAAPL,Jun 1 2005,36.81\nAAPL,Jul 1 2005,42.65\nAAPL,Aug 1 2005,46.89\nAAPL,Sep 1 2005,53.61\nAAPL,Oct 1 2005,57.59\nAAPL,Nov 1 2005,67.82\nAAPL,Dec 1 2005,71.89\nAAPL,Jan 1 2006,75.51\nAAPL,Feb 1 2006,68.49\nAAPL,Mar 1 2006,62.72\nAAPL,Apr 1 2006,70.39\nAAPL,May 1 2006,59.77\nAAPL,Jun 1 2006,57.27\nAAPL,Jul 1 2006,67.96\nAAPL,Aug 1 2006,67.85\nAAPL,Sep 1 2006,76.98\nAAPL,Oct 1 2006,81.08\nAAPL,Nov 1 2006,91.66\nAAPL,Dec 1 2006,84.84\nAAPL,Jan 1 2007,85.73\nAAPL,Feb 1 2007,84.61\nAAPL,Mar 1 2007,92.91\nAAPL,Apr 1 2007,99.8\nAAPL,May 1 2007,121.19\nAAPL,Jun 1 2007,122.04\nAAPL,Jul 1 2007,131.76\nAAPL,Aug 1 2007,138.48\nAAPL,Sep 1 2007,153.47\nAAPL,Oct 1 2007,189.95\nAAPL,Nov 1 2007,182.22\nAAPL,Dec 1 2007,198.08\nAAPL,Jan 1 2008,135.36\nAAPL,Feb 1 2008,125.02\nAAPL,Mar 1 2008,143.5\nAAPL,Apr 1 2008,173.95\nAAPL,May 1 2008,188.75\nAAPL,Jun 1 2008,167.44\nAAPL,Jul 1 2008,158.95\nAAPL,Aug 1 2008,169.53\nAAPL,Sep 1 2008,113.66\nAAPL,Oct 1 2008,107.59\nAAPL,Nov 1 2008,92.67\nAAPL,Dec 1 2008,85.35\nAAPL,Jan 1 2009,90.13\nAAPL,Feb 1 2009,89.31\nAAPL,Mar 1 2009,105.12\nAAPL,Apr 1 2009,125.83\nAAPL,May 1 2009,135.81\nAAPL,Jun 1 2009,142.43\nAAPL,Jul 1 2009,163.39\nAAPL,Aug 1 2009,168.21\nAAPL,Sep 1 2009,185.35\nAAPL,Oct 1 2009,188.5\nAAPL,Nov 1 2009,199.91\nAAPL,Dec 1 2009,210.73\nAAPL,Jan 1 2010,192.06\nAAPL,Feb 1 2010,204.62\nAAPL,Mar 1 2010,223.02",
    "format": {
      "type": "csv"
    }
  },
  "mark": {
    "type": "line",
    "point": true
  },
  "encoding": {
    "x": {"timeUnit": "year", "field": "date"},
    "y": {"aggregate":"mean", "field": "price", "type": "quantitative"},
    "color": {"field": "symbol", "type": "nominal"}
  }
}
```

### Stacked Area Chart

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 300, "height": 200,
  "data": {
    "values": [{"series":"Government","year":2000,"month":1,"count":430,"rate":2.1,"date":"2000-01-01T08:00:00.000Z"},{"series":"Government","year":2000,"month":2,"count":409,"rate":2,"date":"2000-02-01T08:00:00.000Z"},{"series":"Government","year":2000,"month":3,"count":311,"rate":1.5,"date":"2000-03-01T08:00:00.000Z"},{"series":"Government","year":2000,"month":4,"count":269,"rate":1.3,"date":"2000-04-01T08:00:00.000Z"},{"series":"Government","year":2000,"month":5,"count":370,"rate":1.9,"date":"2000-05-01T07:00:00.000Z"},{"series":"Government","year":2000,"month":6,"count":603,"rate":3.1,"date":"2000-06-01T07:00:00.000Z"},{"series":"Government","year":2000,"month":7,"count":545,"rate":2.9,"date":"2000-07-01T07:00:00.000Z"},{"series":"Government","year":2000,"month":8,"count":583,"rate":3.1,"date":"2000-08-01T07:00:00.000Z"},{"series":"Government","year":2000,"month":9,"count":408,"rate":2.1,"date":"2000-09-01T07:00:00.000Z"},{"series":"Government","year":2000,"month":10,"count":391,"rate":2,"date":"2000-10-01T07:00:00.000Z"},{"series":"Government","year":2000,"month":11,"count":384,"rate":1.9,"date":"2000-11-01T08:00:00.000Z"},{"series":"Government","year":2000,"month":12,"count":365,"rate":1.8,"date":"2000-12-01T08:00:00.000Z"},{"series":"Government","year":2001,"month":1,"count":463,"rate":2.3,"date":"2001-01-01T08:00:00.000Z"},{"series":"Government","year":2001,"month":2,"count":298,"rate":1.5,"date":"2001-02-01T08:00:00.000Z"},{"series":"Government","year":2001,"month":3,"count":355,"rate":1.8,"date":"2001-03-01T08:00:00.000Z"},{"series":"Government","year":2001,"month":4,"count":369,"rate":1.9,"date":"2001-04-01T08:00:00.000Z"},{"series":"Government","year":2001,"month":5,"count":361,"rate":1.8,"date":"2001-05-01T07:00:00.000Z"},{"series":"Government","year":2001,"month":6,"count":525,"rate":2.7,"date":"2001-06-01T07:00:00.000Z"},{"series":"Government","year":2001,"month":7,"count":548,"rate":2.8,"date":"2001-07-01T07:00:00.000Z"},{"series":"Government","year":2001,"month":8,"count":540,"rate":2.8,"date":"2001-08-01T07:00:00.000Z"},{"series":"Government","year":2001,"month":9,"count":438,"rate":2.2,"date":"2001-09-01T07:00:00.000Z"},{"series":"Government","year":2001,"month":10,"count":429,"rate":2.2,"date":"2001-10-01T07:00:00.000Z"},{"series":"Government","year":2001,"month":11,"count":420,"rate":2.1,"date":"2001-11-01T08:00:00.000Z"},{"series":"Government","year":2001,"month":12,"count":419,"rate":2.1,"date":"2001-12-01T08:00:00.000Z"},{"series":"Government","year":2002,"month":1,"count":486,"rate":2.4,"date":"2002-01-01T08:00:00.000Z"},{"series":"Government","year":2002,"month":2,"count":508,"rate":2.5,"date":"2002-02-01T08:00:00.000Z"},{"series":"Government","year":2002,"month":3,"count":477,"rate":2.4,"date":"2002-03-01T08:00:00.000Z"},{"series":"Government","year":2002,"month":4,"count":447,"rate":2.2,"date":"2002-04-01T08:00:00.000Z"},{"series":"Government","year":2002,"month":5,"count":484,"rate":2.3,"date":"2002-05-01T07:00:00.000Z"},{"series":"Government","year":2002,"month":6,"count":561,"rate":2.8,"date":"2002-06-01T07:00:00.000Z"},{"series":"Government","year":2002,"month":7,"count":645,"rate":3.2,"date":"2002-07-01T07:00:00.000Z"},{"series":"Government","year":2002,"month":8,"count":596,"rate":3,"date":"2002-08-01T07:00:00.000Z"},{"series":"Government","year":2002,"month":9,"count":530,"rate":2.6,"date":"2002-09-01T07:00:00.000Z"},{"series":"Government","year":2002,"month":10,"count":499,"rate":2.5,"date":"2002-10-01T07:00:00.000Z"},{"series":"Government","year":2002,"month":11,"count":468,"rate":2.3,"date":"2002-11-01T08:00:00.000Z"},{"series":"Government","year":2002,"month":12,"count":446,"rate":2.2,"date":"2002-12-01T08:00:00.000Z"},{"series":"Government","year":2003,"month":1,"count":571,"rate":2.8,"date":"2003-01-01T08:00:00.000Z"},{"series":"Government","year":2003,"month":2,"count":483,"rate":2.4,"date":"2003-02-01T08:00:00.000Z"},{"series":"Government","year":2003,"month":3,"count":526,"rate":2.6,"date":"2003-03-01T08:00:00.000Z"},{"series":"Government","year":2003,"month":4,"count":440,"rate":2.2,"date":"2003-04-01T08:00:00.000Z"},{"series":"Government","year":2003,"month":5,"count":478,"rate":2.4,"date":"2003-05-01T07:00:00.000Z"},{"series":"Government","year":2003,"month":6,"count":704,"rate":3.5,"date":"2003-06-01T07:00:00.000Z"},{"series":"Government","year":2003,"month":7,"count":749,"rate":3.8,"date":"2003-07-01T07:00:00.000Z"},{"series":"Government","year":2003,"month":8,"count":745,"rate":3.7,"date":"2003-08-01T07:00:00.000Z"},{"series":"Government","year":2003,"month":9,"count":556,"rate":2.7,"date":"2003-09-01T07:00:00.000Z"},{"series":"Government","year":2003,"month":10,"count":500,"rate":2.4,"date":"2003-10-01T07:00:00.000Z"},{"series":"Government","year":2003,"month":11,"count":542,"rate":2.7,"date":"2003-11-01T08:00:00.000Z"},{"series":"Government","year":2003,"month":12,"count":516,"rate":2.5,"date":"2003-12-01T08:00:00.000Z"},{"series":"Government","year":2004,"month":1,"count":511,"rate":2.5,"date":"2004-01-01T08:00:00.000Z"},{"series":"Government","year":2004,"month":2,"count":490,"rate":2.4,"date":"2004-02-01T08:00:00.000Z"},{"series":"Government","year":2004,"month":3,"count":530,"rate":2.6,"date":"2004-03-01T08:00:00.000Z"},{"series":"Government","year":2004,"month":4,"count":433,"rate":2.1,"date":"2004-04-01T08:00:00.000Z"},{"series":"Government","year":2004,"month":5,"count":468,"rate":2.3,"date":"2004-05-01T07:00:00.000Z"},{"series":"Government","year":2004,"month":6,"count":580,"rate":2.8,"date":"2004-06-01T07:00:00.000Z"},{"series":"Government","year":2004,"month":7,"count":741,"rate":3.7,"date":"2004-07-01T07:00:00.000Z"},{"series":"Government","year":2004,"month":8,"count":676,"rate":3.3,"date":"2004-08-01T07:00:00.000Z"},{"series":"Government","year":2004,"month":9,"count":568,"rate":2.7,"date":"2004-09-01T07:00:00.000Z"},{"series":"Government","year":2004,"month":10,"count":561,"rate":2.7,"date":"2004-10-01T07:00:00.000Z"},{"series":"Government","year":2004,"month":11,"count":514,"rate":2.4,"date":"2004-11-01T08:00:00.000Z"},{"series":"Government","year":2004,"month":12,"count":499,"rate":2.4,"date":"2004-12-01T08:00:00.000Z"},{"series":"Government","year":2005,"month":1,"count":555,"rate":2.6,"date":"2005-01-01T08:00:00.000Z"},{"series":"Government","year":2005,"month":2,"count":472,"rate":2.3,"date":"2005-02-01T08:00:00.000Z"},{"series":"Government","year":2005,"month":3,"count":468,"rate":2.2,"date":"2005-03-01T08:00:00.000Z"},{"series":"Government","year":2005,"month":4,"count":478,"rate":2.3,"date":"2005-04-01T08:00:00.000Z"},{"series":"Government","year":2005,"month":5,"count":453,"rate":2.1,"date":"2005-05-01T07:00:00.000Z"},{"series":"Government","year":2005,"month":6,"count":681,"rate":3.2,"date":"2005-06-01T07:00:00.000Z"},{"series":"Government","year":2005,"month":7,"count":683,"rate":3.3,"date":"2005-07-01T07:00:00.000Z"},{"series":"Government","year":2005,"month":8,"count":664,"rate":3.2,"date":"2005-08-01T07:00:00.000Z"},{"series":"Government","year":2005,"month":9,"count":568,"rate":2.7,"date":"2005-09-01T07:00:00.000Z"},{"series":"Government","year":2005,"month":10,"count":502,"rate":2.4,"date":"2005-10-01T07:00:00.000Z"},{"series":"Government","year":2005,"month":11,"count":494,"rate":2.4,"date":"2005-11-01T08:00:00.000Z"},{"series":"Government","year":2005,"month":12,"count":393,"rate":1.9,"date":"2005-12-01T08:00:00.000Z"},{"series":"Government","year":2006,"month":1,"count":457,"rate":2.2,"date":"2006-01-01T08:00:00.000Z"},{"series":"Government","year":2006,"month":2,"count":472,"rate":2.3,"date":"2006-02-01T08:00:00.000Z"},{"series":"Government","year":2006,"month":3,"count":461,"rate":2.2,"date":"2006-03-01T08:00:00.000Z"},{"series":"Government","year":2006,"month":4,"count":414,"rate":2,"date":"2006-04-01T08:00:00.000Z"},{"series":"Government","year":2006,"month":5,"count":429,"rate":2.1,"date":"2006-05-01T07:00:00.000Z"},{"series":"Government","year":2006,"month":6,"count":578,"rate":2.8,"date":"2006-06-01T07:00:00.000Z"},{"series":"Government","year":2006,"month":7,"count":659,"rate":3.2,"date":"2006-07-01T07:00:00.000Z"},{"series":"Government","year":2006,"month":8,"count":595,"rate":2.9,"date":"2006-08-01T07:00:00.000Z"},{"series":"Government","year":2006,"month":9,"count":396,"rate":1.9,"date":"2006-09-01T07:00:00.000Z"},{"series":"Government","year":2006,"month":10,"count":424,"rate":2,"date":"2006-10-01T07:00:00.000Z"},{"series":"Government","year":2006,"month":11,"count":400,"rate":1.9,"date":"2006-11-01T08:00:00.000Z"},{"series":"Government","year":2006,"month":12,"count":395,"rate":1.9,"date":"2006-12-01T08:00:00.000Z"},{"series":"Government","year":2007,"month":1,"count":476,"rate":2.2,"date":"2007-01-01T08:00:00.000Z"},{"series":"Government","year":2007,"month":2,"count":405,"rate":1.9,"date":"2007-02-01T08:00:00.000Z"},{"series":"Government","year":2007,"month":3,"count":419,"rate":1.9,"date":"2007-03-01T08:00:00.000Z"},{"series":"Government","year":2007,"month":4,"count":408,"rate":1.9,"date":"2007-04-01T07:00:00.000Z"},{"series":"Government","year":2007,"month":5,"count":428,"rate":1.9,"date":"2007-05-01T07:00:00.000Z"},{"series":"Government","year":2007,"month":6,"count":572,"rate":2.7,"date":"2007-06-01T07:00:00.000Z"},{"series":"Government","year":2007,"month":7,"count":704,"rate":3.3,"date":"2007-07-01T07:00:00.000Z"},{"series":"Government","year":2007,"month":8,"count":695,"rate":3.2,"date":"2007-08-01T07:00:00.000Z"},{"series":"Government","year":2007,"month":9,"count":525,"rate":2.4,"date":"2007-09-01T07:00:00.000Z"},{"series":"Government","year":2007,"month":10,"count":492,"rate":2.3,"date":"2007-10-01T07:00:00.000Z"},{"series":"Government","year":2007,"month":11,"count":482,"rate":2.2,"date":"2007-11-01T07:00:00.000Z"},{"series":"Government","year":2007,"month":12,"count":451,"rate":2.1,"date":"2007-12-01T08:00:00.000Z"},{"series":"Government","year":2008,"month":1,"count":471,"rate":2.2,"date":"2008-01-01T08:00:00.000Z"},{"series":"Government","year":2008,"month":2,"count":372,"rate":1.7,"date":"2008-02-01T08:00:00.000Z"},{"series":"Government","year":2008,"month":3,"count":425,"rate":1.9,"date":"2008-03-01T08:00:00.000Z"},{"series":"Government","year":2008,"month":4,"count":373,"rate":1.7,"date":"2008-04-01T07:00:00.000Z"},{"series":"Government","year":2008,"month":5,"count":461,"rate":2.1,"date":"2008-05-01T07:00:00.000Z"},{"series":"Government","year":2008,"month":6,"count":654,"rate":3,"date":"2008-06-01T07:00:00.000Z"},{"series":"Government","year":2008,"month":7,"count":770,"rate":3.6,"date":"2008-07-01T07:00:00.000Z"},{"series":"Government","year":2008,"month":8,"count":721,"rate":3.3,"date":"2008-08-01T07:00:00.000Z"},{"series":"Government","year":2008,"month":9,"count":573,"rate":2.6,"date":"2008-09-01T07:00:00.000Z"},{"series":"Government","year":2008,"month":10,"count":552,"rate":2.5,"date":"2008-10-01T07:00:00.000Z"},{"series":"Government","year":2008,"month":11,"count":527,"rate":2.4,"date":"2008-11-01T07:00:00.000Z"},{"series":"Government","year":2008,"month":12,"count":511,"rate":2.3,"date":"2008-12-01T08:00:00.000Z"},{"series":"Government","year":2009,"month":1,"count":652,"rate":3,"date":"2009-01-01T08:00:00.000Z"},{"series":"Government","year":2009,"month":2,"count":563,"rate":2.6,"date":"2009-02-01T08:00:00.000Z"},{"series":"Government","year":2009,"month":3,"count":598,"rate":2.8,"date":"2009-03-01T08:00:00.000Z"},{"series":"Government","year":2009,"month":4,"count":575,"rate":2.6,"date":"2009-04-01T07:00:00.000Z"},{"series":"Government","year":2009,"month":5,"count":702,"rate":3.1,"date":"2009-05-01T07:00:00.000Z"},{"series":"Government","year":2009,"month":6,"count":991,"rate":4.4,"date":"2009-06-01T07:00:00.000Z"},{"series":"Government","year":2009,"month":7,"count":1129,"rate":5.1,"date":"2009-07-01T07:00:00.000Z"},{"series":"Government","year":2009,"month":8,"count":1118,"rate":5.1,"date":"2009-08-01T07:00:00.000Z"},{"series":"Government","year":2009,"month":9,"count":928,"rate":4.2,"date":"2009-09-01T07:00:00.000Z"},{"series":"Government","year":2009,"month":10,"count":785,"rate":3.5,"date":"2009-10-01T07:00:00.000Z"},{"series":"Government","year":2009,"month":11,"count":748,"rate":3.4,"date":"2009-11-01T07:00:00.000Z"},{"series":"Government","year":2009,"month":12,"count":797,"rate":3.6,"date":"2009-12-01T08:00:00.000Z"},{"series":"Government","year":2010,"month":1,"count":948,"rate":4.3,"date":"2010-01-01T08:00:00.000Z"},{"series":"Government","year":2010,"month":2,"count":880,"rate":4,"date":"2010-02-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2000,"month":1,"count":19,"rate":3.9,"date":"2000-01-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2000,"month":2,"count":25,"rate":5.5,"date":"2000-02-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2000,"month":3,"count":17,"rate":3.7,"date":"2000-03-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2000,"month":4,"count":20,"rate":4.1,"date":"2000-04-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2000,"month":5,"count":27,"rate":5.3,"date":"2000-05-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2000,"month":6,"count":13,"rate":2.6,"date":"2000-06-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2000,"month":7,"count":16,"rate":3.6,"date":"2000-07-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2000,"month":8,"count":23,"rate":5.1,"date":"2000-08-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2000,"month":9,"count":25,"rate":5.8,"date":"2000-09-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2000,"month":10,"count":39,"rate":7.8,"date":"2000-10-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2000,"month":11,"count":11,"rate":2,"date":"2000-11-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2000,"month":12,"count":20,"rate":3.8,"date":"2000-12-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2001,"month":1,"count":11,"rate":2.3,"date":"2001-01-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2001,"month":2,"count":27,"rate":5.3,"date":"2001-02-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2001,"month":3,"count":14,"rate":3,"date":"2001-03-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2001,"month":4,"count":24,"rate":4.7,"date":"2001-04-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2001,"month":5,"count":34,"rate":5.9,"date":"2001-05-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2001,"month":6,"count":26,"rate":4.7,"date":"2001-06-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2001,"month":7,"count":17,"rate":3.1,"date":"2001-07-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2001,"month":8,"count":18,"rate":3.3,"date":"2001-08-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2001,"month":9,"count":23,"rate":4.2,"date":"2001-09-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2001,"month":10,"count":32,"rate":5.4,"date":"2001-10-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2001,"month":11,"count":20,"rate":3.6,"date":"2001-11-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2001,"month":12,"count":27,"rate":5.3,"date":"2001-12-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2002,"month":1,"count":33,"rate":7,"date":"2002-01-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2002,"month":2,"count":35,"rate":7.5,"date":"2002-02-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2002,"month":3,"count":28,"rate":5.3,"date":"2002-03-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2002,"month":4,"count":33,"rate":6.1,"date":"2002-04-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2002,"month":5,"count":25,"rate":4.9,"date":"2002-05-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2002,"month":6,"count":35,"rate":7.1,"date":"2002-06-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2002,"month":7,"count":19,"rate":3.9,"date":"2002-07-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2002,"month":8,"count":32,"rate":6.3,"date":"2002-08-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2002,"month":9,"count":42,"rate":7.9,"date":"2002-09-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2002,"month":10,"count":36,"rate":6.4,"date":"2002-10-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2002,"month":11,"count":32,"rate":5.4,"date":"2002-11-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2002,"month":12,"count":45,"rate":7.8,"date":"2002-12-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2003,"month":1,"count":54,"rate":9,"date":"2003-01-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2003,"month":2,"count":41,"rate":7.1,"date":"2003-02-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2003,"month":3,"count":46,"rate":8.2,"date":"2003-03-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2003,"month":4,"count":41,"rate":7.7,"date":"2003-04-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2003,"month":5,"count":40,"rate":7.5,"date":"2003-05-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2003,"month":6,"count":36,"rate":6.8,"date":"2003-06-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2003,"month":7,"count":43,"rate":7.9,"date":"2003-07-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2003,"month":8,"count":20,"rate":3.8,"date":"2003-08-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2003,"month":9,"count":25,"rate":4.6,"date":"2003-09-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2003,"month":10,"count":31,"rate":5.6,"date":"2003-10-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2003,"month":11,"count":34,"rate":5.9,"date":"2003-11-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2003,"month":12,"count":32,"rate":5.6,"date":"2003-12-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2004,"month":1,"count":31,"rate":5.8,"date":"2004-01-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2004,"month":2,"count":24,"rate":5,"date":"2004-02-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2004,"month":3,"count":22,"rate":4.4,"date":"2004-03-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2004,"month":4,"count":34,"rate":6.4,"date":"2004-04-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2004,"month":5,"count":22,"rate":4.3,"date":"2004-05-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2004,"month":6,"count":27,"rate":5,"date":"2004-06-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2004,"month":7,"count":28,"rate":5.4,"date":"2004-07-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2004,"month":8,"count":10,"rate":1.9,"date":"2004-08-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2004,"month":9,"count":8,"rate":1.5,"date":"2004-09-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2004,"month":10,"count":15,"rate":2.6,"date":"2004-10-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2004,"month":11,"count":20,"rate":3.3,"date":"2004-11-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2004,"month":12,"count":16,"rate":2.5,"date":"2004-12-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2005,"month":1,"count":29,"rate":4.9,"date":"2005-01-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2005,"month":2,"count":25,"rate":4,"date":"2005-02-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2005,"month":3,"count":32,"rate":5.2,"date":"2005-03-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2005,"month":4,"count":19,"rate":2.9,"date":"2005-04-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2005,"month":5,"count":16,"rate":2.4,"date":"2005-05-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2005,"month":6,"count":25,"rate":4,"date":"2005-06-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2005,"month":7,"count":22,"rate":3.7,"date":"2005-07-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2005,"month":8,"count":12,"rate":2,"date":"2005-08-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2005,"month":9,"count":12,"rate":2,"date":"2005-09-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2005,"month":10,"count":2,"rate":0.3,"date":"2005-10-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2005,"month":11,"count":18,"rate":2.9,"date":"2005-11-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2005,"month":12,"count":23,"rate":3.5,"date":"2005-12-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2006,"month":1,"count":26,"rate":3.9,"date":"2006-01-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2006,"month":2,"count":25,"rate":3.8,"date":"2006-02-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2006,"month":3,"count":14,"rate":2.1,"date":"2006-03-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2006,"month":4,"count":17,"rate":2.5,"date":"2006-04-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2006,"month":5,"count":20,"rate":2.8,"date":"2006-05-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2006,"month":6,"count":31,"rate":4.3,"date":"2006-06-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2006,"month":7,"count":25,"rate":3.5,"date":"2006-07-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2006,"month":8,"count":32,"rate":4.3,"date":"2006-08-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2006,"month":9,"count":14,"rate":2.1,"date":"2006-09-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2006,"month":10,"count":15,"rate":2.2,"date":"2006-10-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2006,"month":11,"count":22,"rate":2.9,"date":"2006-11-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2006,"month":12,"count":25,"rate":3.4,"date":"2006-12-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2007,"month":1,"count":35,"rate":4.7,"date":"2007-01-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2007,"month":2,"count":33,"rate":4.5,"date":"2007-02-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2007,"month":3,"count":24,"rate":3.2,"date":"2007-03-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2007,"month":4,"count":17,"rate":2.3,"date":"2007-04-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2007,"month":5,"count":22,"rate":3,"date":"2007-05-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2007,"month":6,"count":33,"rate":4.3,"date":"2007-06-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2007,"month":7,"count":33,"rate":4.3,"date":"2007-07-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2007,"month":8,"count":33,"rate":4.6,"date":"2007-08-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2007,"month":9,"count":25,"rate":3.2,"date":"2007-09-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2007,"month":10,"count":9,"rate":1.3,"date":"2007-10-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2007,"month":11,"count":16,"rate":2.3,"date":"2007-11-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2007,"month":12,"count":24,"rate":3.4,"date":"2007-12-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2008,"month":1,"count":28,"rate":4,"date":"2008-01-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2008,"month":2,"count":16,"rate":2.2,"date":"2008-02-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2008,"month":3,"count":28,"rate":3.7,"date":"2008-03-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2008,"month":4,"count":28,"rate":3.6,"date":"2008-04-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2008,"month":5,"count":28,"rate":3.4,"date":"2008-05-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2008,"month":6,"count":28,"rate":3.3,"date":"2008-06-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2008,"month":7,"count":13,"rate":1.5,"date":"2008-07-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2008,"month":8,"count":17,"rate":1.9,"date":"2008-08-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2008,"month":9,"count":25,"rate":2.8,"date":"2008-09-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2008,"month":10,"count":15,"rate":1.7,"date":"2008-10-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2008,"month":11,"count":32,"rate":3.7,"date":"2008-11-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2008,"month":12,"count":46,"rate":5.2,"date":"2008-12-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2009,"month":1,"count":59,"rate":7,"date":"2009-01-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2009,"month":2,"count":63,"rate":7.6,"date":"2009-02-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2009,"month":3,"count":105,"rate":12.6,"date":"2009-03-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2009,"month":4,"count":125,"rate":16.1,"date":"2009-04-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2009,"month":5,"count":98,"rate":13.3,"date":"2009-05-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2009,"month":6,"count":100,"rate":13.6,"date":"2009-06-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2009,"month":7,"count":95,"rate":12.6,"date":"2009-07-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2009,"month":8,"count":93,"rate":11.8,"date":"2009-08-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2009,"month":9,"count":76,"rate":10.7,"date":"2009-09-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2009,"month":10,"count":84,"rate":10.8,"date":"2009-10-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2009,"month":11,"count":96,"rate":12,"date":"2009-11-01T07:00:00.000Z"},{"series":"Mining and Extraction","year":2009,"month":12,"count":89,"rate":11.8,"date":"2009-12-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2010,"month":1,"count":68,"rate":9.1,"date":"2010-01-01T08:00:00.000Z"},{"series":"Mining and Extraction","year":2010,"month":2,"count":79,"rate":10.7,"date":"2010-02-01T08:00:00.000Z"},{"series":"Construction","year":2000,"month":1,"count":745,"rate":9.7,"date":"2000-01-01T08:00:00.000Z"},{"series":"Construction","year":2000,"month":2,"count":812,"rate":10.6,"date":"2000-02-01T08:00:00.000Z"},{"series":"Construction","year":2000,"month":3,"count":669,"rate":8.7,"date":"2000-03-01T08:00:00.000Z"},{"series":"Construction","year":2000,"month":4,"count":447,"rate":5.8,"date":"2000-04-01T08:00:00.000Z"},{"series":"Construction","year":2000,"month":5,"count":397,"rate":5,"date":"2000-05-01T07:00:00.000Z"},{"series":"Construction","year":2000,"month":6,"count":389,"rate":4.6,"date":"2000-06-01T07:00:00.000Z"},{"series":"Construction","year":2000,"month":7,"count":384,"rate":4.4,"date":"2000-07-01T07:00:00.000Z"},{"series":"Construction","year":2000,"month":8,"count":446,"rate":5.1,"date":"2000-08-01T07:00:00.000Z"},{"series":"Construction","year":2000,"month":9,"count":386,"rate":4.6,"date":"2000-09-01T07:00:00.000Z"},{"series":"Construction","year":2000,"month":10,"count":417,"rate":4.9,"date":"2000-10-01T07:00:00.000Z"},{"series":"Construction","year":2000,"month":11,"count":482,"rate":5.7,"date":"2000-11-01T08:00:00.000Z"},{"series":"Construction","year":2000,"month":12,"count":580,"rate":6.8,"date":"2000-12-01T08:00:00.000Z"},{"series":"Construction","year":2001,"month":1,"count":836,"rate":9.8,"date":"2001-01-01T08:00:00.000Z"},{"series":"Construction","year":2001,"month":2,"count":826,"rate":9.9,"date":"2001-02-01T08:00:00.000Z"},{"series":"Construction","year":2001,"month":3,"count":683,"rate":8.4,"date":"2001-03-01T08:00:00.000Z"},{"series":"Construction","year":2001,"month":4,"count":596,"rate":7.1,"date":"2001-04-01T08:00:00.000Z"},{"series":"Construction","year":2001,"month":5,"count":478,"rate":5.6,"date":"2001-05-01T07:00:00.000Z"},{"series":"Construction","year":2001,"month":6,"count":443,"rate":5.1,"date":"2001-06-01T07:00:00.000Z"},{"series":"Construction","year":2001,"month":7,"count":447,"rate":4.9,"date":"2001-07-01T07:00:00.000Z"},{"series":"Construction","year":2001,"month":8,"count":522,"rate":5.8,"date":"2001-08-01T07:00:00.000Z"},{"series":"Construction","year":2001,"month":9,"count":489,"rate":5.5,"date":"2001-09-01T07:00:00.000Z"},{"series":"Construction","year":2001,"month":10,"count":535,"rate":6.1,"date":"2001-10-01T07:00:00.000Z"},{"series":"Construction","year":2001,"month":11,"count":670,"rate":7.6,"date":"2001-11-01T08:00:00.000Z"},{"series":"Construction","year":2001,"month":12,"count":785,"rate":9,"date":"2001-12-01T08:00:00.000Z"},{"series":"Construction","year":2002,"month":1,"count":1211,"rate":13.6,"date":"2002-01-01T08:00:00.000Z"},{"series":"Construction","year":2002,"month":2,"count":1060,"rate":12.2,"date":"2002-02-01T08:00:00.000Z"},{"series":"Construction","year":2002,"month":3,"count":1009,"rate":11.8,"date":"2002-03-01T08:00:00.000Z"},{"series":"Construction","year":2002,"month":4,"count":855,"rate":10.1,"date":"2002-04-01T08:00:00.000Z"},{"series":"Construction","year":2002,"month":5,"count":626,"rate":7.4,"date":"2002-05-01T07:00:00.000Z"},{"series":"Construction","year":2002,"month":6,"count":593,"rate":6.9,"date":"2002-06-01T07:00:00.000Z"},{"series":"Construction","year":2002,"month":7,"count":594,"rate":6.9,"date":"2002-07-01T07:00:00.000Z"},{"series":"Construction","year":2002,"month":8,"count":654,"rate":7.4,"date":"2002-08-01T07:00:00.000Z"},{"series":"Construction","year":2002,"month":9,"count":615,"rate":7,"date":"2002-09-01T07:00:00.000Z"},{"series":"Construction","year":2002,"month":10,"count":680,"rate":7.7,"date":"2002-10-01T07:00:00.000Z"},{"series":"Construction","year":2002,"month":11,"count":758,"rate":8.5,"date":"2002-11-01T08:00:00.000Z"},{"series":"Construction","year":2002,"month":12,"count":941,"rate":10.9,"date":"2002-12-01T08:00:00.000Z"},{"series":"Construction","year":2003,"month":1,"count":1196,"rate":14,"date":"2003-01-01T08:00:00.000Z"},{"series":"Construction","year":2003,"month":2,"count":1173,"rate":14,"date":"2003-02-01T08:00:00.000Z"},{"series":"Construction","year":2003,"month":3,"count":987,"rate":11.8,"date":"2003-03-01T08:00:00.000Z"},{"series":"Construction","year":2003,"month":4,"count":772,"rate":9.3,"date":"2003-04-01T08:00:00.000Z"},{"series":"Construction","year":2003,"month":5,"count":715,"rate":8.4,"date":"2003-05-01T07:00:00.000Z"},{"series":"Construction","year":2003,"month":6,"count":710,"rate":7.9,"date":"2003-06-01T07:00:00.000Z"},{"series":"Construction","year":2003,"month":7,"count":677,"rate":7.5,"date":"2003-07-01T07:00:00.000Z"},{"series":"Construction","year":2003,"month":8,"count":650,"rate":7.1,"date":"2003-08-01T07:00:00.000Z"},{"series":"Construction","year":2003,"month":9,"count":681,"rate":7.6,"date":"2003-09-01T07:00:00.000Z"},{"series":"Construction","year":2003,"month":10,"count":651,"rate":7.4,"date":"2003-10-01T07:00:00.000Z"},{"series":"Construction","year":2003,"month":11,"count":690,"rate":7.8,"date":"2003-11-01T08:00:00.000Z"},{"series":"Construction","year":2003,"month":12,"count":813,"rate":9.3,"date":"2003-12-01T08:00:00.000Z"},{"series":"Construction","year":2004,"month":1,"count":994,"rate":11.3,"date":"2004-01-01T08:00:00.000Z"},{"series":"Construction","year":2004,"month":2,"count":1039,"rate":11.6,"date":"2004-02-01T08:00:00.000Z"},{"series":"Construction","year":2004,"month":3,"count":1011,"rate":11.3,"date":"2004-03-01T08:00:00.000Z"},{"series":"Construction","year":2004,"month":4,"count":849,"rate":9.5,"date":"2004-04-01T08:00:00.000Z"},{"series":"Construction","year":2004,"month":5,"count":665,"rate":7.4,"date":"2004-05-01T07:00:00.000Z"},{"series":"Construction","year":2004,"month":6,"count":668,"rate":7,"date":"2004-06-01T07:00:00.000Z"},{"series":"Construction","year":2004,"month":7,"count":610,"rate":6.4,"date":"2004-07-01T07:00:00.000Z"},{"series":"Construction","year":2004,"month":8,"count":563,"rate":6,"date":"2004-08-01T07:00:00.000Z"},{"series":"Construction","year":2004,"month":9,"count":629,"rate":6.8,"date":"2004-09-01T07:00:00.000Z"},{"series":"Construction","year":2004,"month":10,"count":635,"rate":6.9,"date":"2004-10-01T07:00:00.000Z"},{"series":"Construction","year":2004,"month":11,"count":695,"rate":7.4,"date":"2004-11-01T08:00:00.000Z"},{"series":"Construction","year":2004,"month":12,"count":870,"rate":9.5,"date":"2004-12-01T08:00:00.000Z"},{"series":"Construction","year":2005,"month":1,"count":1079,"rate":11.8,"date":"2005-01-01T08:00:00.000Z"},{"series":"Construction","year":2005,"month":2,"count":1150,"rate":12.3,"date":"2005-02-01T08:00:00.000Z"},{"series":"Construction","year":2005,"month":3,"count":961,"rate":10.3,"date":"2005-03-01T08:00:00.000Z"},{"series":"Construction","year":2005,"month":4,"count":693,"rate":7.4,"date":"2005-04-01T08:00:00.000Z"},{"series":"Construction","year":2005,"month":5,"count":567,"rate":6.1,"date":"2005-05-01T07:00:00.000Z"},{"series":"Construction","year":2005,"month":6,"count":559,"rate":5.7,"date":"2005-06-01T07:00:00.000Z"},{"series":"Construction","year":2005,"month":7,"count":509,"rate":5.2,"date":"2005-07-01T07:00:00.000Z"},{"series":"Construction","year":2005,"month":8,"count":561,"rate":5.7,"date":"2005-08-01T07:00:00.000Z"},{"series":"Construction","year":2005,"month":9,"count":572,"rate":5.7,"date":"2005-09-01T07:00:00.000Z"},{"series":"Construction","year":2005,"month":10,"count":519,"rate":5.3,"date":"2005-10-01T07:00:00.000Z"},{"series":"Construction","year":2005,"month":11,"count":564,"rate":5.7,"date":"2005-11-01T08:00:00.000Z"},{"series":"Construction","year":2005,"month":12,"count":813,"rate":8.2,"date":"2005-12-01T08:00:00.000Z"},{"series":"Construction","year":2006,"month":1,"count":868,"rate":9,"date":"2006-01-01T08:00:00.000Z"},{"series":"Construction","year":2006,"month":2,"count":836,"rate":8.6,"date":"2006-02-01T08:00:00.000Z"},{"series":"Construction","year":2006,"month":3,"count":820,"rate":8.5,"date":"2006-03-01T08:00:00.000Z"},{"series":"Construction","year":2006,"month":4,"count":674,"rate":6.9,"date":"2006-04-01T08:00:00.000Z"},{"series":"Construction","year":2006,"month":5,"count":647,"rate":6.6,"date":"2006-05-01T07:00:00.000Z"},{"series":"Construction","year":2006,"month":6,"count":569,"rate":5.6,"date":"2006-06-01T07:00:00.000Z"},{"series":"Construction","year":2006,"month":7,"count":633,"rate":6.1,"date":"2006-07-01T07:00:00.000Z"},{"series":"Construction","year":2006,"month":8,"count":618,"rate":5.9,"date":"2006-08-01T07:00:00.000Z"},{"series":"Construction","year":2006,"month":9,"count":586,"rate":5.6,"date":"2006-09-01T07:00:00.000Z"},{"series":"Construction","year":2006,"month":10,"count":456,"rate":4.5,"date":"2006-10-01T07:00:00.000Z"},{"series":"Construction","year":2006,"month":11,"count":618,"rate":6,"date":"2006-11-01T08:00:00.000Z"},{"series":"Construction","year":2006,"month":12,"count":725,"rate":6.9,"date":"2006-12-01T08:00:00.000Z"},{"series":"Construction","year":2007,"month":1,"count":922,"rate":8.9,"date":"2007-01-01T08:00:00.000Z"},{"series":"Construction","year":2007,"month":2,"count":1086,"rate":10.5,"date":"2007-02-01T08:00:00.000Z"},{"series":"Construction","year":2007,"month":3,"count":924,"rate":9,"date":"2007-03-01T08:00:00.000Z"},{"series":"Construction","year":2007,"month":4,"count":853,"rate":8.6,"date":"2007-04-01T07:00:00.000Z"},{"series":"Construction","year":2007,"month":5,"count":676,"rate":6.9,"date":"2007-05-01T07:00:00.000Z"},{"series":"Construction","year":2007,"month":6,"count":600,"rate":5.9,"date":"2007-06-01T07:00:00.000Z"},{"series":"Construction","year":2007,"month":7,"count":617,"rate":5.9,"date":"2007-07-01T07:00:00.000Z"},{"series":"Construction","year":2007,"month":8,"count":558,"rate":5.3,"date":"2007-08-01T07:00:00.000Z"},{"series":"Construction","year":2007,"month":9,"count":596,"rate":5.8,"date":"2007-09-01T07:00:00.000Z"},{"series":"Construction","year":2007,"month":10,"count":641,"rate":6.1,"date":"2007-10-01T07:00:00.000Z"},{"series":"Construction","year":2007,"month":11,"count":645,"rate":6.2,"date":"2007-11-01T07:00:00.000Z"},{"series":"Construction","year":2007,"month":12,"count":968,"rate":9.4,"date":"2007-12-01T08:00:00.000Z"},{"series":"Construction","year":2008,"month":1,"count":1099,"rate":11,"date":"2008-01-01T08:00:00.000Z"},{"series":"Construction","year":2008,"month":2,"count":1118,"rate":11.4,"date":"2008-02-01T08:00:00.000Z"},{"series":"Construction","year":2008,"month":3,"count":1170,"rate":12,"date":"2008-03-01T08:00:00.000Z"},{"series":"Construction","year":2008,"month":4,"count":1057,"rate":11.1,"date":"2008-04-01T07:00:00.000Z"},{"series":"Construction","year":2008,"month":5,"count":809,"rate":8.6,"date":"2008-05-01T07:00:00.000Z"},{"series":"Construction","year":2008,"month":6,"count":785,"rate":8.2,"date":"2008-06-01T07:00:00.000Z"},{"series":"Construction","year":2008,"month":7,"count":783,"rate":8,"date":"2008-07-01T07:00:00.000Z"},{"series":"Construction","year":2008,"month":8,"count":814,"rate":8.2,"date":"2008-08-01T07:00:00.000Z"},{"series":"Construction","year":2008,"month":9,"count":970,"rate":9.9,"date":"2008-09-01T07:00:00.000Z"},{"series":"Construction","year":2008,"month":10,"count":1078,"rate":10.8,"date":"2008-10-01T07:00:00.000Z"},{"series":"Construction","year":2008,"month":11,"count":1237,"rate":12.7,"date":"2008-11-01T07:00:00.000Z"},{"series":"Construction","year":2008,"month":12,"count":1438,"rate":15.3,"date":"2008-12-01T08:00:00.000Z"},{"series":"Construction","year":2009,"month":1,"count":1744,"rate":18.2,"date":"2009-01-01T08:00:00.000Z"},{"series":"Construction","year":2009,"month":2,"count":2025,"rate":21.4,"date":"2009-02-01T08:00:00.000Z"},{"series":"Construction","year":2009,"month":3,"count":1979,"rate":21.1,"date":"2009-03-01T08:00:00.000Z"},{"series":"Construction","year":2009,"month":4,"count":1737,"rate":18.7,"date":"2009-04-01T07:00:00.000Z"},{"series":"Construction","year":2009,"month":5,"count":1768,"rate":19.2,"date":"2009-05-01T07:00:00.000Z"},{"series":"Construction","year":2009,"month":6,"count":1601,"rate":17.4,"date":"2009-06-01T07:00:00.000Z"},{"series":"Construction","year":2009,"month":7,"count":1687,"rate":18.2,"date":"2009-07-01T07:00:00.000Z"},{"series":"Construction","year":2009,"month":8,"count":1542,"rate":16.5,"date":"2009-08-01T07:00:00.000Z"},{"series":"Construction","year":2009,"month":9,"count":1594,"rate":17.1,"date":"2009-09-01T07:00:00.000Z"},{"series":"Construction","year":2009,"month":10,"count":1744,"rate":18.7,"date":"2009-10-01T07:00:00.000Z"},{"series":"Construction","year":2009,"month":11,"count":1780,"rate":19.4,"date":"2009-11-01T07:00:00.000Z"},{"series":"Construction","year":2009,"month":12,"count":2044,"rate":22.7,"date":"2009-12-01T08:00:00.000Z"},{"series":"Construction","year":2010,"month":1,"count":2194,"rate":24.7,"date":"2010-01-01T08:00:00.000Z"},{"series":"Construction","year":2010,"month":2,"count":2440,"rate":27.1,"date":"2010-02-01T08:00:00.000Z"},{"series":"Manufacturing","year":2000,"month":1,"count":734,"rate":3.6,"date":"2000-01-01T08:00:00.000Z"},{"series":"Manufacturing","year":2000,"month":2,"count":694,"rate":3.4,"date":"2000-02-01T08:00:00.000Z"},{"series":"Manufacturing","year":2000,"month":3,"count":739,"rate":3.6,"date":"2000-03-01T08:00:00.000Z"},{"series":"Manufacturing","year":2000,"month":4,"count":736,"rate":3.7,"date":"2000-04-01T08:00:00.000Z"},{"series":"Manufacturing","year":2000,"month":5,"count":685,"rate":3.4,"date":"2000-05-01T07:00:00.000Z"},{"series":"Manufacturing","year":2000,"month":6,"count":621,"rate":3.1,"date":"2000-06-01T07:00:00.000Z"},{"series":"Manufacturing","year":2000,"month":7,"count":708,"rate":3.6,"date":"2000-07-01T07:00:00.000Z"},{"series":"Manufacturing","year":2000,"month":8,"count":685,"rate":3.4,"date":"2000-08-01T07:00:00.000Z"},{"series":"Manufacturing","year":2000,"month":9,"count":667,"rate":3.4,"date":"2000-09-01T07:00:00.000Z"},{"series":"Manufacturing","year":2000,"month":10,"count":693,"rate":3.6,"date":"2000-10-01T07:00:00.000Z"},{"series":"Manufacturing","year":2000,"month":11,"count":672,"rate":3.4,"date":"2000-11-01T08:00:00.000Z"},{"series":"Manufacturing","year":2000,"month":12,"count":653,"rate":3.3,"date":"2000-12-01T08:00:00.000Z"},{"series":"Manufacturing","year":2001,"month":1,"count":911,"rate":4.6,"date":"2001-01-01T08:00:00.000Z"},{"series":"Manufacturing","year":2001,"month":2,"count":902,"rate":4.6,"date":"2001-02-01T08:00:00.000Z"},{"series":"Manufacturing","year":2001,"month":3,"count":954,"rate":4.9,"date":"2001-03-01T08:00:00.000Z"},{"series":"Manufacturing","year":2001,"month":4,"count":855,"rate":4.4,"date":"2001-04-01T08:00:00.000Z"},{"series":"Manufacturing","year":2001,"month":5,"count":903,"rate":4.7,"date":"2001-05-01T07:00:00.000Z"},{"series":"Manufacturing","year":2001,"month":6,"count":956,"rate":5,"date":"2001-06-01T07:00:00.000Z"},{"series":"Manufacturing","year":2001,"month":7,"count":1054,"rate":5.6,"date":"2001-07-01T07:00:00.000Z"},{"series":"Manufacturing","year":2001,"month":8,"count":1023,"rate":5.5,"date":"2001-08-01T07:00:00.000Z"},{"series":"Manufacturing","year":2001,"month":9,"count":996,"rate":5.4,"date":"2001-09-01T07:00:00.000Z"},{"series":"Manufacturing","year":2001,"month":10,"count":1065,"rate":5.8,"date":"2001-10-01T07:00:00.000Z"},{"series":"Manufacturing","year":2001,"month":11,"count":1108,"rate":6,"date":"2001-11-01T08:00:00.000Z"},{"series":"Manufacturing","year":2001,"month":12,"count":1172,"rate":6.3,"date":"2001-12-01T08:00:00.000Z"},{"series":"Manufacturing","year":2002,"month":1,"count":1377,"rate":7.4,"date":"2002-01-01T08:00:00.000Z"},{"series":"Manufacturing","year":2002,"month":2,"count":1296,"rate":7,"date":"2002-02-01T08:00:00.000Z"},{"series":"Manufacturing","year":2002,"month":3,"count":1367,"rate":7.3,"date":"2002-03-01T08:00:00.000Z"},{"series":"Manufacturing","year":2002,"month":4,"count":1322,"rate":7.2,"date":"2002-04-01T08:00:00.000Z"},{"series":"Manufacturing","year":2002,"month":5,"count":1194,"rate":6.6,"date":"2002-05-01T07:00:00.000Z"},{"series":"Manufacturing","year":2002,"month":6,"count":1187,"rate":6.6,"date":"2002-06-01T07:00:00.000Z"},{"series":"Manufacturing","year":2002,"month":7,"count":1185,"rate":6.6,"date":"2002-07-01T07:00:00.000Z"},{"series":"Manufacturing","year":2002,"month":8,"count":1108,"rate":6.2,"date":"2002-08-01T07:00:00.000Z"},{"series":"Manufacturing","year":2002,"month":9,"count":1076,"rate":6.1,"date":"2002-09-01T07:00:00.000Z"},{"series":"Manufacturing","year":2002,"month":10,"count":1046,"rate":5.9,"date":"2002-10-01T07:00:00.000Z"},{"series":"Manufacturing","year":2002,"month":11,"count":1115,"rate":6.3,"date":"2002-11-01T08:00:00.000Z"},{"series":"Manufacturing","year":2002,"month":12,"count":1188,"rate":6.6,"date":"2002-12-01T08:00:00.000Z"},{"series":"Manufacturing","year":2003,"month":1,"count":1302,"rate":7.2,"date":"2003-01-01T08:00:00.000Z"},{"series":"Manufacturing","year":2003,"month":2,"count":1229,"rate":6.7,"date":"2003-02-01T08:00:00.000Z"},{"series":"Manufacturing","year":2003,"month":3,"count":1222,"rate":6.8,"date":"2003-03-01T08:00:00.000Z"},{"series":"Manufacturing","year":2003,"month":4,"count":1199,"rate":6.7,"date":"2003-04-01T08:00:00.000Z"},{"series":"Manufacturing","year":2003,"month":5,"count":1150,"rate":6.5,"date":"2003-05-01T07:00:00.000Z"},{"series":"Manufacturing","year":2003,"month":6,"count":1232,"rate":7,"date":"2003-06-01T07:00:00.000Z"},{"series":"Manufacturing","year":2003,"month":7,"count":1193,"rate":6.9,"date":"2003-07-01T07:00:00.000Z"},{"series":"Manufacturing","year":2003,"month":8,"count":1186,"rate":6.7,"date":"2003-08-01T07:00:00.000Z"},{"series":"Manufacturing","year":2003,"month":9,"count":1175,"rate":6.8,"date":"2003-09-01T07:00:00.000Z"},{"series":"Manufacturing","year":2003,"month":10,"count":1041,"rate":6,"date":"2003-10-01T07:00:00.000Z"},{"series":"Manufacturing","year":2003,"month":11,"count":1034,"rate":5.9,"date":"2003-11-01T08:00:00.000Z"},{"series":"Manufacturing","year":2003,"month":12,"count":1025,"rate":5.9,"date":"2003-12-01T08:00:00.000Z"},{"series":"Manufacturing","year":2004,"month":1,"count":1110,"rate":6.4,"date":"2004-01-01T08:00:00.000Z"},{"series":"Manufacturing","year":2004,"month":2,"count":1094,"rate":6.3,"date":"2004-02-01T08:00:00.000Z"},{"series":"Manufacturing","year":2004,"month":3,"count":1083,"rate":6.3,"date":"2004-03-01T08:00:00.000Z"},{"series":"Manufacturing","year":2004,"month":4,"count":1004,"rate":5.8,"date":"2004-04-01T08:00:00.000Z"},{"series":"Manufacturing","year":2004,"month":5,"count":966,"rate":5.6,"date":"2004-05-01T07:00:00.000Z"},{"series":"Manufacturing","year":2004,"month":6,"count":957,"rate":5.6,"date":"2004-06-01T07:00:00.000Z"},{"series":"Manufacturing","year":2004,"month":7,"count":1019,"rate":6,"date":"2004-07-01T07:00:00.000Z"},{"series":"Manufacturing","year":2004,"month":8,"count":840,"rate":4.9,"date":"2004-08-01T07:00:00.000Z"},{"series":"Manufacturing","year":2004,"month":9,"count":852,"rate":5,"date":"2004-09-01T07:00:00.000Z"},{"series":"Manufacturing","year":2004,"month":10,"count":884,"rate":5.3,"date":"2004-10-01T07:00:00.000Z"},{"series":"Manufacturing","year":2004,"month":11,"count":905,"rate":5.4,"date":"2004-11-01T08:00:00.000Z"},{"series":"Manufacturing","year":2004,"month":12,"count":872,"rate":5.1,"date":"2004-12-01T08:00:00.000Z"},{"series":"Manufacturing","year":2005,"month":1,"count":889,"rate":5.3,"date":"2005-01-01T08:00:00.000Z"},{"series":"Manufacturing","year":2005,"month":2,"count":889,"rate":5.3,"date":"2005-02-01T08:00:00.000Z"},{"series":"Manufacturing","year":2005,"month":3,"count":879,"rate":5.3,"date":"2005-03-01T08:00:00.000Z"},{"series":"Manufacturing","year":2005,"month":4,"count":793,"rate":4.8,"date":"2005-04-01T08:00:00.000Z"},{"series":"Manufacturing","year":2005,"month":5,"count":743,"rate":4.5,"date":"2005-05-01T07:00:00.000Z"},{"series":"Manufacturing","year":2005,"month":6,"count":743,"rate":4.4,"date":"2005-06-01T07:00:00.000Z"},{"series":"Manufacturing","year":2005,"month":7,"count":883,"rate":5.3,"date":"2005-07-01T07:00:00.000Z"},{"series":"Manufacturing","year":2005,"month":8,"count":767,"rate":4.7,"date":"2005-08-01T07:00:00.000Z"},{"series":"Manufacturing","year":2005,"month":9,"count":775,"rate":4.7,"date":"2005-09-01T07:00:00.000Z"},{"series":"Manufacturing","year":2005,"month":10,"count":800,"rate":4.8,"date":"2005-10-01T07:00:00.000Z"},{"series":"Manufacturing","year":2005,"month":11,"count":823,"rate":4.9,"date":"2005-11-01T08:00:00.000Z"},{"series":"Manufacturing","year":2005,"month":12,"count":757,"rate":4.5,"date":"2005-12-01T08:00:00.000Z"},{"series":"Manufacturing","year":2006,"month":1,"count":778,"rate":4.6,"date":"2006-01-01T08:00:00.000Z"},{"series":"Manufacturing","year":2006,"month":2,"count":821,"rate":4.9,"date":"2006-02-01T08:00:00.000Z"},{"series":"Manufacturing","year":2006,"month":3,"count":701,"rate":4.1,"date":"2006-03-01T08:00:00.000Z"},{"series":"Manufacturing","year":2006,"month":4,"count":745,"rate":4.5,"date":"2006-04-01T08:00:00.000Z"},{"series":"Manufacturing","year":2006,"month":5,"count":680,"rate":4.1,"date":"2006-05-01T07:00:00.000Z"},{"series":"Manufacturing","year":2006,"month":6,"count":635,"rate":3.8,"date":"2006-06-01T07:00:00.000Z"},{"series":"Manufacturing","year":2006,"month":7,"count":736,"rate":4.4,"date":"2006-07-01T07:00:00.000Z"},{"series":"Manufacturing","year":2006,"month":8,"count":680,"rate":4.1,"date":"2006-08-01T07:00:00.000Z"},{"series":"Manufacturing","year":2006,"month":9,"count":632,"rate":3.8,"date":"2006-09-01T07:00:00.000Z"},{"series":"Manufacturing","year":2006,"month":10,"count":618,"rate":3.7,"date":"2006-10-01T07:00:00.000Z"},{"series":"Manufacturing","year":2006,"month":11,"count":702,"rate":4.3,"date":"2006-11-01T08:00:00.000Z"},{"series":"Manufacturing","year":2006,"month":12,"count":660,"rate":4,"date":"2006-12-01T08:00:00.000Z"},{"series":"Manufacturing","year":2007,"month":1,"count":752,"rate":4.6,"date":"2007-01-01T08:00:00.000Z"},{"series":"Manufacturing","year":2007,"month":2,"count":774,"rate":4.7,"date":"2007-02-01T08:00:00.000Z"},{"series":"Manufacturing","year":2007,"month":3,"count":742,"rate":4.5,"date":"2007-03-01T08:00:00.000Z"},{"series":"Manufacturing","year":2007,"month":4,"count":749,"rate":4.6,"date":"2007-04-01T07:00:00.000Z"},{"series":"Manufacturing","year":2007,"month":5,"count":651,"rate":3.9,"date":"2007-05-01T07:00:00.000Z"},{"series":"Manufacturing","year":2007,"month":6,"count":653,"rate":4,"date":"2007-06-01T07:00:00.000Z"},{"series":"Manufacturing","year":2007,"month":7,"count":621,"rate":3.7,"date":"2007-07-01T07:00:00.000Z"},{"series":"Manufacturing","year":2007,"month":8,"count":596,"rate":3.6,"date":"2007-08-01T07:00:00.000Z"},{"series":"Manufacturing","year":2007,"month":9,"count":673,"rate":4.1,"date":"2007-09-01T07:00:00.000Z"},{"series":"Manufacturing","year":2007,"month":10,"count":729,"rate":4.3,"date":"2007-10-01T07:00:00.000Z"},{"series":"Manufacturing","year":2007,"month":11,"count":762,"rate":4.5,"date":"2007-11-01T07:00:00.000Z"},{"series":"Manufacturing","year":2007,"month":12,"count":772,"rate":4.6,"date":"2007-12-01T08:00:00.000Z"},{"series":"Manufacturing","year":2008,"month":1,"count":837,"rate":5.1,"date":"2008-01-01T08:00:00.000Z"},{"series":"Manufacturing","year":2008,"month":2,"count":820,"rate":5,"date":"2008-02-01T08:00:00.000Z"},{"series":"Manufacturing","year":2008,"month":3,"count":831,"rate":5,"date":"2008-03-01T08:00:00.000Z"},{"series":"Manufacturing","year":2008,"month":4,"count":796,"rate":4.8,"date":"2008-04-01T07:00:00.000Z"},{"series":"Manufacturing","year":2008,"month":5,"count":879,"rate":5.3,"date":"2008-05-01T07:00:00.000Z"},{"series":"Manufacturing","year":2008,"month":6,"count":862,"rate":5.2,"date":"2008-06-01T07:00:00.000Z"},{"series":"Manufacturing","year":2008,"month":7,"count":908,"rate":5.5,"date":"2008-07-01T07:00:00.000Z"},{"series":"Manufacturing","year":2008,"month":8,"count":960,"rate":5.7,"date":"2008-08-01T07:00:00.000Z"},{"series":"Manufacturing","year":2008,"month":9,"count":984,"rate":6,"date":"2008-09-01T07:00:00.000Z"},{"series":"Manufacturing","year":2008,"month":10,"count":1007,"rate":6.2,"date":"2008-10-01T07:00:00.000Z"},{"series":"Manufacturing","year":2008,"month":11,"count":1144,"rate":7,"date":"2008-11-01T07:00:00.000Z"},{"series":"Manufacturing","year":2008,"month":12,"count":1315,"rate":8.3,"date":"2008-12-01T08:00:00.000Z"},{"series":"Manufacturing","year":2009,"month":1,"count":1711,"rate":10.9,"date":"2009-01-01T08:00:00.000Z"},{"series":"Manufacturing","year":2009,"month":2,"count":1822,"rate":11.5,"date":"2009-02-01T08:00:00.000Z"},{"series":"Manufacturing","year":2009,"month":3,"count":1912,"rate":12.2,"date":"2009-03-01T08:00:00.000Z"},{"series":"Manufacturing","year":2009,"month":4,"count":1968,"rate":12.4,"date":"2009-04-01T07:00:00.000Z"},{"series":"Manufacturing","year":2009,"month":5,"count":2010,"rate":12.6,"date":"2009-05-01T07:00:00.000Z"},{"series":"Manufacturing","year":2009,"month":6,"count":2010,"rate":12.6,"date":"2009-06-01T07:00:00.000Z"},{"series":"Manufacturing","year":2009,"month":7,"count":1988,"rate":12.4,"date":"2009-07-01T07:00:00.000Z"},{"series":"Manufacturing","year":2009,"month":8,"count":1866,"rate":11.8,"date":"2009-08-01T07:00:00.000Z"},{"series":"Manufacturing","year":2009,"month":9,"count":1876,"rate":11.9,"date":"2009-09-01T07:00:00.000Z"},{"series":"Manufacturing","year":2009,"month":10,"count":1884,"rate":12.2,"date":"2009-10-01T07:00:00.000Z"},{"series":"Manufacturing","year":2009,"month":11,"count":1882,"rate":12.5,"date":"2009-11-01T07:00:00.000Z"},{"series":"Manufacturing","year":2009,"month":12,"count":1747,"rate":11.9,"date":"2009-12-01T08:00:00.000Z"},{"series":"Manufacturing","year":2010,"month":1,"count":1918,"rate":13,"date":"2010-01-01T08:00:00.000Z"},{"series":"Manufacturing","year":2010,"month":2,"count":1814,"rate":12.1,"date":"2010-02-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2000,"month":1,"count":1000,"rate":5,"date":"2000-01-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2000,"month":2,"count":1023,"rate":5.2,"date":"2000-02-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2000,"month":3,"count":983,"rate":5.1,"date":"2000-03-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2000,"month":4,"count":793,"rate":4.1,"date":"2000-04-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2000,"month":5,"count":821,"rate":4.3,"date":"2000-05-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2000,"month":6,"count":837,"rate":4.4,"date":"2000-06-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2000,"month":7,"count":792,"rate":4.1,"date":"2000-07-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2000,"month":8,"count":853,"rate":4.3,"date":"2000-08-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2000,"month":9,"count":791,"rate":4.1,"date":"2000-09-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2000,"month":10,"count":739,"rate":3.7,"date":"2000-10-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2000,"month":11,"count":701,"rate":3.6,"date":"2000-11-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2000,"month":12,"count":715,"rate":3.7,"date":"2000-12-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2001,"month":1,"count":908,"rate":4.7,"date":"2001-01-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2001,"month":2,"count":990,"rate":5.2,"date":"2001-02-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2001,"month":3,"count":1037,"rate":5.4,"date":"2001-03-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2001,"month":4,"count":820,"rate":4.3,"date":"2001-04-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2001,"month":5,"count":875,"rate":4.5,"date":"2001-05-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2001,"month":6,"count":955,"rate":4.9,"date":"2001-06-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2001,"month":7,"count":833,"rate":4.3,"date":"2001-07-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2001,"month":8,"count":928,"rate":4.8,"date":"2001-08-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2001,"month":9,"count":936,"rate":4.8,"date":"2001-09-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2001,"month":10,"count":941,"rate":4.8,"date":"2001-10-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2001,"month":11,"count":1046,"rate":5.3,"date":"2001-11-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2001,"month":12,"count":1074,"rate":5.4,"date":"2001-12-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2002,"month":1,"count":1212,"rate":6.3,"date":"2002-01-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2002,"month":2,"count":1264,"rate":6.6,"date":"2002-02-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2002,"month":3,"count":1269,"rate":6.6,"date":"2002-03-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2002,"month":4,"count":1222,"rate":6.4,"date":"2002-04-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2002,"month":5,"count":1138,"rate":5.8,"date":"2002-05-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2002,"month":6,"count":1240,"rate":6.2,"date":"2002-06-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2002,"month":7,"count":1132,"rate":5.6,"date":"2002-07-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2002,"month":8,"count":1170,"rate":5.8,"date":"2002-08-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2002,"month":9,"count":1171,"rate":5.9,"date":"2002-09-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2002,"month":10,"count":1212,"rate":6.1,"date":"2002-10-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2002,"month":11,"count":1242,"rate":6.2,"date":"2002-11-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2002,"month":12,"count":1150,"rate":5.7,"date":"2002-12-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2003,"month":1,"count":1342,"rate":6.7,"date":"2003-01-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2003,"month":2,"count":1238,"rate":6.1,"date":"2003-02-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2003,"month":3,"count":1179,"rate":5.9,"date":"2003-03-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2003,"month":4,"count":1201,"rate":6,"date":"2003-04-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2003,"month":5,"count":1247,"rate":6.2,"date":"2003-05-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2003,"month":6,"count":1434,"rate":6.9,"date":"2003-06-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2003,"month":7,"count":1387,"rate":6.6,"date":"2003-07-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2003,"month":8,"count":1161,"rate":5.6,"date":"2003-08-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2003,"month":9,"count":1229,"rate":5.9,"date":"2003-09-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2003,"month":10,"count":1189,"rate":5.7,"date":"2003-10-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2003,"month":11,"count":1156,"rate":5.4,"date":"2003-11-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2003,"month":12,"count":1081,"rate":5,"date":"2003-12-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2004,"month":1,"count":1389,"rate":6.5,"date":"2004-01-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2004,"month":2,"count":1369,"rate":6.5,"date":"2004-02-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2004,"month":3,"count":1386,"rate":6.8,"date":"2004-03-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2004,"month":4,"count":1248,"rate":6.1,"date":"2004-04-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2004,"month":5,"count":1183,"rate":5.8,"date":"2004-05-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2004,"month":6,"count":1182,"rate":5.8,"date":"2004-06-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2004,"month":7,"count":1163,"rate":5.5,"date":"2004-07-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2004,"month":8,"count":1079,"rate":5.1,"date":"2004-08-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2004,"month":9,"count":1127,"rate":5.5,"date":"2004-09-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2004,"month":10,"count":1138,"rate":5.4,"date":"2004-10-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2004,"month":11,"count":1045,"rate":5,"date":"2004-11-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2004,"month":12,"count":1058,"rate":5,"date":"2004-12-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2005,"month":1,"count":1302,"rate":6.3,"date":"2005-01-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2005,"month":2,"count":1301,"rate":6.2,"date":"2005-02-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2005,"month":3,"count":1173,"rate":5.6,"date":"2005-03-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2005,"month":4,"count":1131,"rate":5.4,"date":"2005-04-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2005,"month":5,"count":1145,"rate":5.4,"date":"2005-05-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2005,"month":6,"count":1197,"rate":5.7,"date":"2005-06-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2005,"month":7,"count":1194,"rate":5.6,"date":"2005-07-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2005,"month":8,"count":1130,"rate":5.3,"date":"2005-08-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2005,"month":9,"count":1038,"rate":4.9,"date":"2005-09-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2005,"month":10,"count":1050,"rate":4.9,"date":"2005-10-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2005,"month":11,"count":1013,"rate":4.7,"date":"2005-11-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2005,"month":12,"count":968,"rate":4.5,"date":"2005-12-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2006,"month":1,"count":1203,"rate":5.7,"date":"2006-01-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2006,"month":2,"count":1141,"rate":5.4,"date":"2006-02-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2006,"month":3,"count":1022,"rate":4.9,"date":"2006-03-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2006,"month":4,"count":972,"rate":4.6,"date":"2006-04-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2006,"month":5,"count":1025,"rate":4.8,"date":"2006-05-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2006,"month":6,"count":1085,"rate":5.1,"date":"2006-06-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2006,"month":7,"count":1083,"rate":5.1,"date":"2006-07-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2006,"month":8,"count":977,"rate":4.7,"date":"2006-08-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2006,"month":9,"count":1008,"rate":4.9,"date":"2006-09-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2006,"month":10,"count":972,"rate":4.7,"date":"2006-10-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2006,"month":11,"count":1018,"rate":4.8,"date":"2006-11-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2006,"month":12,"count":965,"rate":4.5,"date":"2006-12-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2007,"month":1,"count":1166,"rate":5.5,"date":"2007-01-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2007,"month":2,"count":1045,"rate":5.1,"date":"2007-02-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2007,"month":3,"count":896,"rate":4.4,"date":"2007-03-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2007,"month":4,"count":872,"rate":4.2,"date":"2007-04-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2007,"month":5,"count":795,"rate":3.9,"date":"2007-05-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2007,"month":6,"count":979,"rate":4.6,"date":"2007-06-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2007,"month":7,"count":1089,"rate":5.2,"date":"2007-07-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2007,"month":8,"count":1028,"rate":5.1,"date":"2007-08-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2007,"month":9,"count":1027,"rate":5.1,"date":"2007-09-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2007,"month":10,"count":907,"rate":4.4,"date":"2007-10-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2007,"month":11,"count":893,"rate":4.3,"date":"2007-11-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2007,"month":12,"count":1009,"rate":4.8,"date":"2007-12-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2008,"month":1,"count":1120,"rate":5.4,"date":"2008-01-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2008,"month":2,"count":1007,"rate":4.9,"date":"2008-02-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2008,"month":3,"count":992,"rate":4.9,"date":"2008-03-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2008,"month":4,"count":919,"rate":4.5,"date":"2008-04-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2008,"month":5,"count":1049,"rate":5.2,"date":"2008-05-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2008,"month":6,"count":1160,"rate":5.7,"date":"2008-06-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2008,"month":7,"count":1329,"rate":6.5,"date":"2008-07-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2008,"month":8,"count":1366,"rate":6.6,"date":"2008-08-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2008,"month":9,"count":1277,"rate":6.2,"date":"2008-09-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2008,"month":10,"count":1313,"rate":6.3,"date":"2008-10-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2008,"month":11,"count":1397,"rate":6.7,"date":"2008-11-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2008,"month":12,"count":1535,"rate":7.2,"date":"2008-12-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2009,"month":1,"count":1794,"rate":8.7,"date":"2009-01-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2009,"month":2,"count":1847,"rate":8.9,"date":"2009-02-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2009,"month":3,"count":1852,"rate":9,"date":"2009-03-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2009,"month":4,"count":1833,"rate":9,"date":"2009-04-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2009,"month":5,"count":1835,"rate":9,"date":"2009-05-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2009,"month":6,"count":1863,"rate":9.1,"date":"2009-06-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2009,"month":7,"count":1854,"rate":9,"date":"2009-07-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2009,"month":8,"count":1794,"rate":8.8,"date":"2009-08-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2009,"month":9,"count":1809,"rate":9,"date":"2009-09-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2009,"month":10,"count":1919,"rate":9.6,"date":"2009-10-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2009,"month":11,"count":1879,"rate":9.2,"date":"2009-11-01T07:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2009,"month":12,"count":1851,"rate":9.1,"date":"2009-12-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2010,"month":1,"count":2154,"rate":10.5,"date":"2010-01-01T08:00:00.000Z"},{"series":"Wholesale and Retail Trade","year":2010,"month":2,"count":2071,"rate":10,"date":"2010-02-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2000,"month":1,"count":236,"rate":4.3,"date":"2000-01-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2000,"month":2,"count":223,"rate":4,"date":"2000-02-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2000,"month":3,"count":192,"rate":3.5,"date":"2000-03-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2000,"month":4,"count":191,"rate":3.4,"date":"2000-04-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2000,"month":5,"count":190,"rate":3.4,"date":"2000-05-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2000,"month":6,"count":183,"rate":3.2,"date":"2000-06-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2000,"month":7,"count":228,"rate":3.9,"date":"2000-07-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2000,"month":8,"count":198,"rate":3.4,"date":"2000-08-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2000,"month":9,"count":231,"rate":4,"date":"2000-09-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2000,"month":10,"count":153,"rate":2.8,"date":"2000-10-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2000,"month":11,"count":129,"rate":2.3,"date":"2000-11-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2000,"month":12,"count":168,"rate":3.1,"date":"2000-12-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2001,"month":1,"count":194,"rate":3.6,"date":"2001-01-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2001,"month":2,"count":189,"rate":3.4,"date":"2001-02-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2001,"month":3,"count":193,"rate":3.5,"date":"2001-03-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2001,"month":4,"count":232,"rate":4.2,"date":"2001-04-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2001,"month":5,"count":178,"rate":3.1,"date":"2001-05-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2001,"month":6,"count":242,"rate":4.3,"date":"2001-06-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2001,"month":7,"count":236,"rate":4.2,"date":"2001-07-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2001,"month":8,"count":226,"rate":3.9,"date":"2001-08-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2001,"month":9,"count":214,"rate":3.9,"date":"2001-09-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2001,"month":10,"count":321,"rate":5.8,"date":"2001-10-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2001,"month":11,"count":302,"rate":5.4,"date":"2001-11-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2001,"month":12,"count":310,"rate":5.6,"date":"2001-12-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2002,"month":1,"count":368,"rate":6.6,"date":"2002-01-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2002,"month":2,"count":331,"rate":5.7,"date":"2002-02-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2002,"month":3,"count":313,"rate":5.6,"date":"2002-03-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2002,"month":4,"count":280,"rate":5,"date":"2002-04-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2002,"month":5,"count":257,"rate":4.5,"date":"2002-05-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2002,"month":6,"count":274,"rate":4.9,"date":"2002-06-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2002,"month":7,"count":270,"rate":4.9,"date":"2002-07-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2002,"month":8,"count":221,"rate":3.9,"date":"2002-08-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2002,"month":9,"count":235,"rate":4.2,"date":"2002-09-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2002,"month":10,"count":262,"rate":4.7,"date":"2002-10-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2002,"month":11,"count":233,"rate":4.2,"date":"2002-11-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2002,"month":12,"count":243,"rate":4.6,"date":"2002-12-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2003,"month":1,"count":331,"rate":6.3,"date":"2003-01-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2003,"month":2,"count":316,"rate":5.8,"date":"2003-02-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2003,"month":3,"count":319,"rate":5.9,"date":"2003-03-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2003,"month":4,"count":274,"rate":5,"date":"2003-04-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2003,"month":5,"count":260,"rate":4.9,"date":"2003-05-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2003,"month":6,"count":300,"rate":5.5,"date":"2003-06-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2003,"month":7,"count":289,"rate":5.4,"date":"2003-07-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2003,"month":8,"count":255,"rate":4.8,"date":"2003-08-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2003,"month":9,"count":255,"rate":4.7,"date":"2003-09-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2003,"month":10,"count":260,"rate":4.8,"date":"2003-10-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2003,"month":11,"count":275,"rate":5.1,"date":"2003-11-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2003,"month":12,"count":267,"rate":5,"date":"2003-12-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2004,"month":1,"count":243,"rate":4.6,"date":"2004-01-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2004,"month":2,"count":291,"rate":5.5,"date":"2004-02-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2004,"month":3,"count":284,"rate":5.4,"date":"2004-03-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2004,"month":4,"count":239,"rate":4.5,"date":"2004-04-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2004,"month":5,"count":230,"rate":4.4,"date":"2004-05-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2004,"month":6,"count":227,"rate":4.3,"date":"2004-06-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2004,"month":7,"count":231,"rate":4.3,"date":"2004-07-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2004,"month":8,"count":236,"rate":4.4,"date":"2004-08-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2004,"month":9,"count":208,"rate":3.9,"date":"2004-09-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2004,"month":10,"count":219,"rate":4,"date":"2004-10-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2004,"month":11,"count":217,"rate":4,"date":"2004-11-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2004,"month":12,"count":204,"rate":3.8,"date":"2004-12-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2005,"month":1,"count":276,"rate":5,"date":"2005-01-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2005,"month":2,"count":245,"rate":4.4,"date":"2005-02-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2005,"month":3,"count":267,"rate":4.8,"date":"2005-03-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2005,"month":4,"count":257,"rate":4.7,"date":"2005-04-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2005,"month":5,"count":223,"rate":4.1,"date":"2005-05-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2005,"month":6,"count":247,"rate":4.5,"date":"2005-06-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2005,"month":7,"count":222,"rate":3.9,"date":"2005-07-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2005,"month":8,"count":187,"rate":3.3,"date":"2005-08-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2005,"month":9,"count":211,"rate":3.7,"date":"2005-09-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2005,"month":10,"count":251,"rate":4.4,"date":"2005-10-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2005,"month":11,"count":199,"rate":3.5,"date":"2005-11-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2005,"month":12,"count":202,"rate":3.6,"date":"2005-12-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2006,"month":1,"count":287,"rate":5,"date":"2006-01-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2006,"month":2,"count":260,"rate":4.6,"date":"2006-02-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2006,"month":3,"count":263,"rate":4.7,"date":"2006-03-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2006,"month":4,"count":272,"rate":4.8,"date":"2006-04-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2006,"month":5,"count":226,"rate":4,"date":"2006-05-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2006,"month":6,"count":225,"rate":3.9,"date":"2006-06-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2006,"month":7,"count":237,"rate":4.2,"date":"2006-07-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2006,"month":8,"count":217,"rate":3.7,"date":"2006-08-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2006,"month":9,"count":183,"rate":3.1,"date":"2006-09-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2006,"month":10,"count":206,"rate":3.6,"date":"2006-10-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2006,"month":11,"count":183,"rate":3.1,"date":"2006-11-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2006,"month":12,"count":190,"rate":3.2,"date":"2006-12-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2007,"month":1,"count":248,"rate":4.2,"date":"2007-01-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2007,"month":2,"count":251,"rate":4.2,"date":"2007-02-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2007,"month":3,"count":249,"rate":4.3,"date":"2007-03-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2007,"month":4,"count":188,"rate":3.3,"date":"2007-04-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2007,"month":5,"count":216,"rate":3.8,"date":"2007-05-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2007,"month":6,"count":242,"rate":4.1,"date":"2007-06-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2007,"month":7,"count":309,"rate":5.1,"date":"2007-07-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2007,"month":8,"count":205,"rate":3.4,"date":"2007-08-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2007,"month":9,"count":224,"rate":3.7,"date":"2007-09-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2007,"month":10,"count":218,"rate":3.6,"date":"2007-10-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2007,"month":11,"count":242,"rate":3.9,"date":"2007-11-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2007,"month":12,"count":210,"rate":3.4,"date":"2007-12-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2008,"month":1,"count":271,"rate":4.4,"date":"2008-01-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2008,"month":2,"count":289,"rate":4.6,"date":"2008-02-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2008,"month":3,"count":267,"rate":4.3,"date":"2008-03-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2008,"month":4,"count":245,"rate":4,"date":"2008-04-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2008,"month":5,"count":269,"rate":4.3,"date":"2008-05-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2008,"month":6,"count":329,"rate":5.1,"date":"2008-06-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2008,"month":7,"count":359,"rate":5.7,"date":"2008-07-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2008,"month":8,"count":309,"rate":5.2,"date":"2008-08-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2008,"month":9,"count":337,"rate":5.8,"date":"2008-09-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2008,"month":10,"count":316,"rate":5.7,"date":"2008-10-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2008,"month":11,"count":331,"rate":5.8,"date":"2008-11-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2008,"month":12,"count":421,"rate":6.7,"date":"2008-12-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2009,"month":1,"count":522,"rate":8.4,"date":"2009-01-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2009,"month":2,"count":563,"rate":9.1,"date":"2009-02-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2009,"month":3,"count":558,"rate":9,"date":"2009-03-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2009,"month":4,"count":541,"rate":9,"date":"2009-04-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2009,"month":5,"count":506,"rate":8.5,"date":"2009-05-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2009,"month":6,"count":499,"rate":8.4,"date":"2009-06-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2009,"month":7,"count":511,"rate":8.8,"date":"2009-07-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2009,"month":8,"count":547,"rate":9.8,"date":"2009-08-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2009,"month":9,"count":538,"rate":9.5,"date":"2009-09-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2009,"month":10,"count":480,"rate":8.6,"date":"2009-10-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2009,"month":11,"count":493,"rate":8.5,"date":"2009-11-01T07:00:00.000Z"},{"series":"Transportation and Utilities","year":2009,"month":12,"count":539,"rate":9,"date":"2009-12-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2010,"month":1,"count":657,"rate":11.3,"date":"2010-01-01T08:00:00.000Z"},{"series":"Transportation and Utilities","year":2010,"month":2,"count":591,"rate":10.5,"date":"2010-02-01T08:00:00.000Z"},{"series":"Information","year":2000,"month":1,"count":125,"rate":3.4,"date":"2000-01-01T08:00:00.000Z"},{"series":"Information","year":2000,"month":2,"count":112,"rate":2.9,"date":"2000-02-01T08:00:00.000Z"},{"series":"Information","year":2000,"month":3,"count":140,"rate":3.6,"date":"2000-03-01T08:00:00.000Z"},{"series":"Information","year":2000,"month":4,"count":95,"rate":2.4,"date":"2000-04-01T08:00:00.000Z"},{"series":"Information","year":2000,"month":5,"count":131,"rate":3.5,"date":"2000-05-01T07:00:00.000Z"},{"series":"Information","year":2000,"month":6,"count":102,"rate":2.6,"date":"2000-06-01T07:00:00.000Z"},{"series":"Information","year":2000,"month":7,"count":144,"rate":3.6,"date":"2000-07-01T07:00:00.000Z"},{"series":"Information","year":2000,"month":8,"count":143,"rate":3.7,"date":"2000-08-01T07:00:00.000Z"},{"series":"Information","year":2000,"month":9,"count":130,"rate":3.3,"date":"2000-09-01T07:00:00.000Z"},{"series":"Information","year":2000,"month":10,"count":96,"rate":2.4,"date":"2000-10-01T07:00:00.000Z"},{"series":"Information","year":2000,"month":11,"count":117,"rate":3,"date":"2000-11-01T08:00:00.000Z"},{"series":"Information","year":2000,"month":12,"count":151,"rate":4,"date":"2000-12-01T08:00:00.000Z"},{"series":"Information","year":2001,"month":1,"count":161,"rate":4.1,"date":"2001-01-01T08:00:00.000Z"},{"series":"Information","year":2001,"month":2,"count":109,"rate":2.9,"date":"2001-02-01T08:00:00.000Z"},{"series":"Information","year":2001,"month":3,"count":148,"rate":3.8,"date":"2001-03-01T08:00:00.000Z"},{"series":"Information","year":2001,"month":4,"count":148,"rate":3.7,"date":"2001-04-01T08:00:00.000Z"},{"series":"Information","year":2001,"month":5,"count":164,"rate":4.2,"date":"2001-05-01T07:00:00.000Z"},{"series":"Information","year":2001,"month":6,"count":163,"rate":4.1,"date":"2001-06-01T07:00:00.000Z"},{"series":"Information","year":2001,"month":7,"count":206,"rate":5.2,"date":"2001-07-01T07:00:00.000Z"},{"series":"Information","year":2001,"month":8,"count":210,"rate":5.4,"date":"2001-08-01T07:00:00.000Z"},{"series":"Information","year":2001,"month":9,"count":219,"rate":5.6,"date":"2001-09-01T07:00:00.000Z"},{"series":"Information","year":2001,"month":10,"count":233,"rate":6,"date":"2001-10-01T07:00:00.000Z"},{"series":"Information","year":2001,"month":11,"count":241,"rate":6.2,"date":"2001-11-01T08:00:00.000Z"},{"series":"Information","year":2001,"month":12,"count":275,"rate":7.4,"date":"2001-12-01T08:00:00.000Z"},{"series":"Information","year":2002,"month":1,"count":263,"rate":7.1,"date":"2002-01-01T08:00:00.000Z"},{"series":"Information","year":2002,"month":2,"count":279,"rate":7.6,"date":"2002-02-01T08:00:00.000Z"},{"series":"Information","year":2002,"month":3,"count":266,"rate":7.2,"date":"2002-03-01T08:00:00.000Z"},{"series":"Information","year":2002,"month":4,"count":257,"rate":6.9,"date":"2002-04-01T08:00:00.000Z"},{"series":"Information","year":2002,"month":5,"count":260,"rate":7.2,"date":"2002-05-01T07:00:00.000Z"},{"series":"Information","year":2002,"month":6,"count":255,"rate":6.9,"date":"2002-06-01T07:00:00.000Z"},{"series":"Information","year":2002,"month":7,"count":264,"rate":7.1,"date":"2002-07-01T07:00:00.000Z"},{"series":"Information","year":2002,"month":8,"count":270,"rate":7.1,"date":"2002-08-01T07:00:00.000Z"},{"series":"Information","year":2002,"month":9,"count":231,"rate":6.3,"date":"2002-09-01T07:00:00.000Z"},{"series":"Information","year":2002,"month":10,"count":211,"rate":6,"date":"2002-10-01T07:00:00.000Z"},{"series":"Information","year":2002,"month":11,"count":220,"rate":6.5,"date":"2002-11-01T08:00:00.000Z"},{"series":"Information","year":2002,"month":12,"count":255,"rate":7.2,"date":"2002-12-01T08:00:00.000Z"},{"series":"Information","year":2003,"month":1,"count":243,"rate":6.7,"date":"2003-01-01T08:00:00.000Z"},{"series":"Information","year":2003,"month":2,"count":321,"rate":8.6,"date":"2003-02-01T08:00:00.000Z"},{"series":"Information","year":2003,"month":3,"count":267,"rate":7.4,"date":"2003-03-01T08:00:00.000Z"},{"series":"Information","year":2003,"month":4,"count":268,"rate":7.3,"date":"2003-04-01T08:00:00.000Z"},{"series":"Information","year":2003,"month":5,"count":251,"rate":6.9,"date":"2003-05-01T07:00:00.000Z"},{"series":"Information","year":2003,"month":6,"count":239,"rate":6.4,"date":"2003-06-01T07:00:00.000Z"},{"series":"Information","year":2003,"month":7,"count":224,"rate":5.9,"date":"2003-07-01T07:00:00.000Z"},{"series":"Information","year":2003,"month":8,"count":224,"rate":6.1,"date":"2003-08-01T07:00:00.000Z"},{"series":"Information","year":2003,"month":9,"count":248,"rate":7,"date":"2003-09-01T07:00:00.000Z"},{"series":"Information","year":2003,"month":10,"count":182,"rate":5.4,"date":"2003-10-01T07:00:00.000Z"},{"series":"Information","year":2003,"month":11,"count":257,"rate":7.6,"date":"2003-11-01T08:00:00.000Z"},{"series":"Information","year":2003,"month":12,"count":224,"rate":6.5,"date":"2003-12-01T08:00:00.000Z"},{"series":"Information","year":2004,"month":1,"count":236,"rate":7,"date":"2004-01-01T08:00:00.000Z"},{"series":"Information","year":2004,"month":2,"count":194,"rate":5.8,"date":"2004-02-01T08:00:00.000Z"},{"series":"Information","year":2004,"month":3,"count":216,"rate":6.3,"date":"2004-03-01T08:00:00.000Z"},{"series":"Information","year":2004,"month":4,"count":168,"rate":5,"date":"2004-04-01T08:00:00.000Z"},{"series":"Information","year":2004,"month":5,"count":190,"rate":5.7,"date":"2004-05-01T07:00:00.000Z"},{"series":"Information","year":2004,"month":6,"count":172,"rate":5,"date":"2004-06-01T07:00:00.000Z"},{"series":"Information","year":2004,"month":7,"count":174,"rate":5.2,"date":"2004-07-01T07:00:00.000Z"},{"series":"Information","year":2004,"month":8,"count":191,"rate":5.7,"date":"2004-08-01T07:00:00.000Z"},{"series":"Information","year":2004,"month":9,"count":178,"rate":5.4,"date":"2004-09-01T07:00:00.000Z"},{"series":"Information","year":2004,"month":10,"count":185,"rate":5.6,"date":"2004-10-01T07:00:00.000Z"},{"series":"Information","year":2004,"month":11,"count":187,"rate":5.6,"date":"2004-11-01T08:00:00.000Z"},{"series":"Information","year":2004,"month":12,"count":173,"rate":5.7,"date":"2004-12-01T08:00:00.000Z"},{"series":"Information","year":2005,"month":1,"count":168,"rate":5.4,"date":"2005-01-01T08:00:00.000Z"},{"series":"Information","year":2005,"month":2,"count":204,"rate":6.5,"date":"2005-02-01T08:00:00.000Z"},{"series":"Information","year":2005,"month":3,"count":177,"rate":6,"date":"2005-03-01T08:00:00.000Z"},{"series":"Information","year":2005,"month":4,"count":178,"rate":5.9,"date":"2005-04-01T08:00:00.000Z"},{"series":"Information","year":2005,"month":5,"count":145,"rate":4.7,"date":"2005-05-01T07:00:00.000Z"},{"series":"Information","year":2005,"month":6,"count":160,"rate":5,"date":"2005-06-01T07:00:00.000Z"},{"series":"Information","year":2005,"month":7,"count":142,"rate":4.2,"date":"2005-07-01T07:00:00.000Z"},{"series":"Information","year":2005,"month":8,"count":156,"rate":4.6,"date":"2005-08-01T07:00:00.000Z"},{"series":"Information","year":2005,"month":9,"count":168,"rate":4.9,"date":"2005-09-01T07:00:00.000Z"},{"series":"Information","year":2005,"month":10,"count":162,"rate":4.8,"date":"2005-10-01T07:00:00.000Z"},{"series":"Information","year":2005,"month":11,"count":172,"rate":5.1,"date":"2005-11-01T08:00:00.000Z"},{"series":"Information","year":2005,"month":12,"count":128,"rate":3.7,"date":"2005-12-01T08:00:00.000Z"},{"series":"Information","year":2006,"month":1,"count":105,"rate":3.3,"date":"2006-01-01T08:00:00.000Z"},{"series":"Information","year":2006,"month":2,"count":119,"rate":3.7,"date":"2006-02-01T08:00:00.000Z"},{"series":"Information","year":2006,"month":3,"count":116,"rate":3.5,"date":"2006-03-01T08:00:00.000Z"},{"series":"Information","year":2006,"month":4,"count":132,"rate":4.2,"date":"2006-04-01T08:00:00.000Z"},{"series":"Information","year":2006,"month":5,"count":158,"rate":4.8,"date":"2006-05-01T07:00:00.000Z"},{"series":"Information","year":2006,"month":6,"count":114,"rate":3.4,"date":"2006-06-01T07:00:00.000Z"},{"series":"Information","year":2006,"month":7,"count":103,"rate":3,"date":"2006-07-01T07:00:00.000Z"},{"series":"Information","year":2006,"month":8,"count":132,"rate":3.9,"date":"2006-08-01T07:00:00.000Z"},{"series":"Information","year":2006,"month":9,"count":170,"rate":4.9,"date":"2006-09-01T07:00:00.000Z"},{"series":"Information","year":2006,"month":10,"count":116,"rate":3.4,"date":"2006-10-01T07:00:00.000Z"},{"series":"Information","year":2006,"month":11,"count":137,"rate":3.9,"date":"2006-11-01T08:00:00.000Z"},{"series":"Information","year":2006,"month":12,"count":108,"rate":2.9,"date":"2006-12-01T08:00:00.000Z"},{"series":"Information","year":2007,"month":1,"count":143,"rate":4,"date":"2007-01-01T08:00:00.000Z"},{"series":"Information","year":2007,"month":2,"count":139,"rate":4,"date":"2007-02-01T08:00:00.000Z"},{"series":"Information","year":2007,"month":3,"count":109,"rate":3.2,"date":"2007-03-01T08:00:00.000Z"},{"series":"Information","year":2007,"month":4,"count":77,"rate":2.4,"date":"2007-04-01T07:00:00.000Z"},{"series":"Information","year":2007,"month":5,"count":110,"rate":3.3,"date":"2007-05-01T07:00:00.000Z"},{"series":"Information","year":2007,"month":6,"count":114,"rate":3.4,"date":"2007-06-01T07:00:00.000Z"},{"series":"Information","year":2007,"month":7,"count":112,"rate":3.4,"date":"2007-07-01T07:00:00.000Z"},{"series":"Information","year":2007,"month":8,"count":140,"rate":4.1,"date":"2007-08-01T07:00:00.000Z"},{"series":"Information","year":2007,"month":9,"count":124,"rate":3.7,"date":"2007-09-01T07:00:00.000Z"},{"series":"Information","year":2007,"month":10,"count":120,"rate":3.7,"date":"2007-10-01T07:00:00.000Z"},{"series":"Information","year":2007,"month":11,"count":132,"rate":4,"date":"2007-11-01T07:00:00.000Z"},{"series":"Information","year":2007,"month":12,"count":125,"rate":3.7,"date":"2007-12-01T08:00:00.000Z"},{"series":"Information","year":2008,"month":1,"count":169,"rate":5.1,"date":"2008-01-01T08:00:00.000Z"},{"series":"Information","year":2008,"month":2,"count":193,"rate":5.8,"date":"2008-02-01T08:00:00.000Z"},{"series":"Information","year":2008,"month":3,"count":155,"rate":4.8,"date":"2008-03-01T08:00:00.000Z"},{"series":"Information","year":2008,"month":4,"count":143,"rate":4.4,"date":"2008-04-01T07:00:00.000Z"},{"series":"Information","year":2008,"month":5,"count":170,"rate":5,"date":"2008-05-01T07:00:00.000Z"},{"series":"Information","year":2008,"month":6,"count":157,"rate":4.7,"date":"2008-06-01T07:00:00.000Z"},{"series":"Information","year":2008,"month":7,"count":141,"rate":4.1,"date":"2008-07-01T07:00:00.000Z"},{"series":"Information","year":2008,"month":8,"count":144,"rate":4.2,"date":"2008-08-01T07:00:00.000Z"},{"series":"Information","year":2008,"month":9,"count":166,"rate":5,"date":"2008-09-01T07:00:00.000Z"},{"series":"Information","year":2008,"month":10,"count":168,"rate":5,"date":"2008-10-01T07:00:00.000Z"},{"series":"Information","year":2008,"month":11,"count":173,"rate":5.2,"date":"2008-11-01T07:00:00.000Z"},{"series":"Information","year":2008,"month":12,"count":219,"rate":6.9,"date":"2008-12-01T08:00:00.000Z"},{"series":"Information","year":2009,"month":1,"count":232,"rate":7.4,"date":"2009-01-01T08:00:00.000Z"},{"series":"Information","year":2009,"month":2,"count":224,"rate":7.1,"date":"2009-02-01T08:00:00.000Z"},{"series":"Information","year":2009,"month":3,"count":252,"rate":7.8,"date":"2009-03-01T08:00:00.000Z"},{"series":"Information","year":2009,"month":4,"count":320,"rate":10.1,"date":"2009-04-01T07:00:00.000Z"},{"series":"Information","year":2009,"month":5,"count":303,"rate":9.5,"date":"2009-05-01T07:00:00.000Z"},{"series":"Information","year":2009,"month":6,"count":347,"rate":11.1,"date":"2009-06-01T07:00:00.000Z"},{"series":"Information","year":2009,"month":7,"count":373,"rate":11.5,"date":"2009-07-01T07:00:00.000Z"},{"series":"Information","year":2009,"month":8,"count":358,"rate":10.7,"date":"2009-08-01T07:00:00.000Z"},{"series":"Information","year":2009,"month":9,"count":362,"rate":11.2,"date":"2009-09-01T07:00:00.000Z"},{"series":"Information","year":2009,"month":10,"count":261,"rate":8.2,"date":"2009-10-01T07:00:00.000Z"},{"series":"Information","year":2009,"month":11,"count":243,"rate":7.6,"date":"2009-11-01T07:00:00.000Z"},{"series":"Information","year":2009,"month":12,"count":256,"rate":8.5,"date":"2009-12-01T08:00:00.000Z"},{"series":"Information","year":2010,"month":1,"count":313,"rate":10,"date":"2010-01-01T08:00:00.000Z"},{"series":"Information","year":2010,"month":2,"count":300,"rate":10,"date":"2010-02-01T08:00:00.000Z"},{"series":"Finance","year":2000,"month":1,"count":228,"rate":2.7,"date":"2000-01-01T08:00:00.000Z"},{"series":"Finance","year":2000,"month":2,"count":240,"rate":2.8,"date":"2000-02-01T08:00:00.000Z"},{"series":"Finance","year":2000,"month":3,"count":226,"rate":2.6,"date":"2000-03-01T08:00:00.000Z"},{"series":"Finance","year":2000,"month":4,"count":197,"rate":2.3,"date":"2000-04-01T08:00:00.000Z"},{"series":"Finance","year":2000,"month":5,"count":195,"rate":2.2,"date":"2000-05-01T07:00:00.000Z"},{"series":"Finance","year":2000,"month":6,"count":216,"rate":2.5,"date":"2000-06-01T07:00:00.000Z"},{"series":"Finance","year":2000,"month":7,"count":190,"rate":2.2,"date":"2000-07-01T07:00:00.000Z"},{"series":"Finance","year":2000,"month":8,"count":213,"rate":2.5,"date":"2000-08-01T07:00:00.000Z"},{"series":"Finance","year":2000,"month":9,"count":187,"rate":2.2,"date":"2000-09-01T07:00:00.000Z"},{"series":"Finance","year":2000,"month":10,"count":224,"rate":2.6,"date":"2000-10-01T07:00:00.000Z"},{"series":"Finance","year":2000,"month":11,"count":184,"rate":2.1,"date":"2000-11-01T08:00:00.000Z"},{"series":"Finance","year":2000,"month":12,"count":200,"rate":2.3,"date":"2000-12-01T08:00:00.000Z"},{"series":"Finance","year":2001,"month":1,"count":232,"rate":2.6,"date":"2001-01-01T08:00:00.000Z"},{"series":"Finance","year":2001,"month":2,"count":235,"rate":2.6,"date":"2001-02-01T08:00:00.000Z"},{"series":"Finance","year":2001,"month":3,"count":211,"rate":2.4,"date":"2001-03-01T08:00:00.000Z"},{"series":"Finance","year":2001,"month":4,"count":232,"rate":2.6,"date":"2001-04-01T08:00:00.000Z"},{"series":"Finance","year":2001,"month":5,"count":191,"rate":2.2,"date":"2001-05-01T07:00:00.000Z"},{"series":"Finance","year":2001,"month":6,"count":249,"rate":2.8,"date":"2001-06-01T07:00:00.000Z"},{"series":"Finance","year":2001,"month":7,"count":289,"rate":3.3,"date":"2001-07-01T07:00:00.000Z"},{"series":"Finance","year":2001,"month":8,"count":256,"rate":2.9,"date":"2001-08-01T07:00:00.000Z"},{"series":"Finance","year":2001,"month":9,"count":268,"rate":3.1,"date":"2001-09-01T07:00:00.000Z"},{"series":"Finance","year":2001,"month":10,"count":281,"rate":3.3,"date":"2001-10-01T07:00:00.000Z"},{"series":"Finance","year":2001,"month":11,"count":320,"rate":3.6,"date":"2001-11-01T08:00:00.000Z"},{"series":"Finance","year":2001,"month":12,"count":258,"rate":3,"date":"2001-12-01T08:00:00.000Z"},{"series":"Finance","year":2002,"month":1,"count":267,"rate":3,"date":"2002-01-01T08:00:00.000Z"},{"series":"Finance","year":2002,"month":2,"count":318,"rate":3.5,"date":"2002-02-01T08:00:00.000Z"},{"series":"Finance","year":2002,"month":3,"count":287,"rate":3.2,"date":"2002-03-01T08:00:00.000Z"},{"series":"Finance","year":2002,"month":4,"count":292,"rate":3.3,"date":"2002-04-01T08:00:00.000Z"},{"series":"Finance","year":2002,"month":5,"count":340,"rate":3.8,"date":"2002-05-01T07:00:00.000Z"},{"series":"Finance","year":2002,"month":6,"count":373,"rate":4.1,"date":"2002-06-01T07:00:00.000Z"},{"series":"Finance","year":2002,"month":7,"count":345,"rate":3.8,"date":"2002-07-01T07:00:00.000Z"},{"series":"Finance","year":2002,"month":8,"count":343,"rate":3.8,"date":"2002-08-01T07:00:00.000Z"},{"series":"Finance","year":2002,"month":9,"count":299,"rate":3.3,"date":"2002-09-01T07:00:00.000Z"},{"series":"Finance","year":2002,"month":10,"count":312,"rate":3.5,"date":"2002-10-01T07:00:00.000Z"},{"series":"Finance","year":2002,"month":11,"count":337,"rate":3.7,"date":"2002-11-01T08:00:00.000Z"},{"series":"Finance","year":2002,"month":12,"count":322,"rate":3.6,"date":"2002-12-01T08:00:00.000Z"},{"series":"Finance","year":2003,"month":1,"count":327,"rate":3.6,"date":"2003-01-01T08:00:00.000Z"},{"series":"Finance","year":2003,"month":2,"count":310,"rate":3.4,"date":"2003-02-01T08:00:00.000Z"},{"series":"Finance","year":2003,"month":3,"count":357,"rate":4,"date":"2003-03-01T08:00:00.000Z"},{"series":"Finance","year":2003,"month":4,"count":323,"rate":3.6,"date":"2003-04-01T08:00:00.000Z"},{"series":"Finance","year":2003,"month":5,"count":320,"rate":3.6,"date":"2003-05-01T07:00:00.000Z"},{"series":"Finance","year":2003,"month":6,"count":358,"rate":4,"date":"2003-06-01T07:00:00.000Z"},{"series":"Finance","year":2003,"month":7,"count":284,"rate":3.1,"date":"2003-07-01T07:00:00.000Z"},{"series":"Finance","year":2003,"month":8,"count":342,"rate":3.7,"date":"2003-08-01T07:00:00.000Z"},{"series":"Finance","year":2003,"month":9,"count":305,"rate":3.3,"date":"2003-09-01T07:00:00.000Z"},{"series":"Finance","year":2003,"month":10,"count":303,"rate":3.3,"date":"2003-10-01T07:00:00.000Z"},{"series":"Finance","year":2003,"month":11,"count":311,"rate":3.3,"date":"2003-11-01T08:00:00.000Z"},{"series":"Finance","year":2003,"month":12,"count":283,"rate":3,"date":"2003-12-01T08:00:00.000Z"},{"series":"Finance","year":2004,"month":1,"count":403,"rate":4.3,"date":"2004-01-01T08:00:00.000Z"},{"series":"Finance","year":2004,"month":2,"count":363,"rate":3.8,"date":"2004-02-01T08:00:00.000Z"},{"series":"Finance","year":2004,"month":3,"count":343,"rate":3.7,"date":"2004-03-01T08:00:00.000Z"},{"series":"Finance","year":2004,"month":4,"count":312,"rate":3.4,"date":"2004-04-01T08:00:00.000Z"},{"series":"Finance","year":2004,"month":5,"count":302,"rate":3.3,"date":"2004-05-01T07:00:00.000Z"},{"series":"Finance","year":2004,"month":6,"count":335,"rate":3.6,"date":"2004-06-01T07:00:00.000Z"},{"series":"Finance","year":2004,"month":7,"count":307,"rate":3.3,"date":"2004-07-01T07:00:00.000Z"},{"series":"Finance","year":2004,"month":8,"count":312,"rate":3.4,"date":"2004-08-01T07:00:00.000Z"},{"series":"Finance","year":2004,"month":9,"count":374,"rate":4,"date":"2004-09-01T07:00:00.000Z"},{"series":"Finance","year":2004,"month":10,"count":358,"rate":3.8,"date":"2004-10-01T07:00:00.000Z"},{"series":"Finance","year":2004,"month":11,"count":290,"rate":3.1,"date":"2004-11-01T08:00:00.000Z"},{"series":"Finance","year":2004,"month":12,"count":290,"rate":3.1,"date":"2004-12-01T08:00:00.000Z"},{"series":"Finance","year":2005,"month":1,"count":252,"rate":2.7,"date":"2005-01-01T08:00:00.000Z"},{"series":"Finance","year":2005,"month":2,"count":301,"rate":3.2,"date":"2005-02-01T08:00:00.000Z"},{"series":"Finance","year":2005,"month":3,"count":261,"rate":2.7,"date":"2005-03-01T08:00:00.000Z"},{"series":"Finance","year":2005,"month":4,"count":255,"rate":2.7,"date":"2005-04-01T08:00:00.000Z"},{"series":"Finance","year":2005,"month":5,"count":288,"rate":3.1,"date":"2005-05-01T07:00:00.000Z"},{"series":"Finance","year":2005,"month":6,"count":307,"rate":3.3,"date":"2005-06-01T07:00:00.000Z"},{"series":"Finance","year":2005,"month":7,"count":309,"rate":3.3,"date":"2005-07-01T07:00:00.000Z"},{"series":"Finance","year":2005,"month":8,"count":300,"rate":3.2,"date":"2005-08-01T07:00:00.000Z"},{"series":"Finance","year":2005,"month":9,"count":260,"rate":2.7,"date":"2005-09-01T07:00:00.000Z"},{"series":"Finance","year":2005,"month":10,"count":255,"rate":2.7,"date":"2005-10-01T07:00:00.000Z"},{"series":"Finance","year":2005,"month":11,"count":268,"rate":2.8,"date":"2005-11-01T08:00:00.000Z"},{"series":"Finance","year":2005,"month":12,"count":204,"rate":2.1,"date":"2005-12-01T08:00:00.000Z"},{"series":"Finance","year":2006,"month":1,"count":233,"rate":2.4,"date":"2006-01-01T08:00:00.000Z"},{"series":"Finance","year":2006,"month":2,"count":268,"rate":2.8,"date":"2006-02-01T08:00:00.000Z"},{"series":"Finance","year":2006,"month":3,"count":298,"rate":3.1,"date":"2006-03-01T08:00:00.000Z"},{"series":"Finance","year":2006,"month":4,"count":293,"rate":3.1,"date":"2006-04-01T08:00:00.000Z"},{"series":"Finance","year":2006,"month":5,"count":289,"rate":3,"date":"2006-05-01T07:00:00.000Z"},{"series":"Finance","year":2006,"month":6,"count":299,"rate":3.1,"date":"2006-06-01T07:00:00.000Z"},{"series":"Finance","year":2006,"month":7,"count":329,"rate":3.4,"date":"2006-07-01T07:00:00.000Z"},{"series":"Finance","year":2006,"month":8,"count":263,"rate":2.7,"date":"2006-08-01T07:00:00.000Z"},{"series":"Finance","year":2006,"month":9,"count":235,"rate":2.4,"date":"2006-09-01T07:00:00.000Z"},{"series":"Finance","year":2006,"month":10,"count":211,"rate":2.1,"date":"2006-10-01T07:00:00.000Z"},{"series":"Finance","year":2006,"month":11,"count":229,"rate":2.3,"date":"2006-11-01T08:00:00.000Z"},{"series":"Finance","year":2006,"month":12,"count":227,"rate":2.3,"date":"2006-12-01T08:00:00.000Z"},{"series":"Finance","year":2007,"month":1,"count":233,"rate":2.4,"date":"2007-01-01T08:00:00.000Z"},{"series":"Finance","year":2007,"month":2,"count":295,"rate":3.1,"date":"2007-02-01T08:00:00.000Z"},{"series":"Finance","year":2007,"month":3,"count":252,"rate":2.6,"date":"2007-03-01T08:00:00.000Z"},{"series":"Finance","year":2007,"month":4,"count":231,"rate":2.4,"date":"2007-04-01T07:00:00.000Z"},{"series":"Finance","year":2007,"month":5,"count":281,"rate":2.9,"date":"2007-05-01T07:00:00.000Z"},{"series":"Finance","year":2007,"month":6,"count":303,"rate":3.1,"date":"2007-06-01T07:00:00.000Z"},{"series":"Finance","year":2007,"month":7,"count":307,"rate":3.1,"date":"2007-07-01T07:00:00.000Z"},{"series":"Finance","year":2007,"month":8,"count":371,"rate":3.7,"date":"2007-08-01T07:00:00.000Z"},{"series":"Finance","year":2007,"month":9,"count":316,"rate":3.3,"date":"2007-09-01T07:00:00.000Z"},{"series":"Finance","year":2007,"month":10,"count":307,"rate":3.2,"date":"2007-10-01T07:00:00.000Z"},{"series":"Finance","year":2007,"month":11,"count":261,"rate":2.7,"date":"2007-11-01T07:00:00.000Z"},{"series":"Finance","year":2007,"month":12,"count":315,"rate":3.2,"date":"2007-12-01T08:00:00.000Z"},{"series":"Finance","year":2008,"month":1,"count":285,"rate":3,"date":"2008-01-01T08:00:00.000Z"},{"series":"Finance","year":2008,"month":2,"count":323,"rate":3.4,"date":"2008-02-01T08:00:00.000Z"},{"series":"Finance","year":2008,"month":3,"count":323,"rate":3.4,"date":"2008-03-01T08:00:00.000Z"},{"series":"Finance","year":2008,"month":4,"count":324,"rate":3.4,"date":"2008-04-01T07:00:00.000Z"},{"series":"Finance","year":2008,"month":5,"count":361,"rate":3.7,"date":"2008-05-01T07:00:00.000Z"},{"series":"Finance","year":2008,"month":6,"count":337,"rate":3.4,"date":"2008-06-01T07:00:00.000Z"},{"series":"Finance","year":2008,"month":7,"count":350,"rate":3.6,"date":"2008-07-01T07:00:00.000Z"},{"series":"Finance","year":2008,"month":8,"count":409,"rate":4.2,"date":"2008-08-01T07:00:00.000Z"},{"series":"Finance","year":2008,"month":9,"count":380,"rate":4,"date":"2008-09-01T07:00:00.000Z"},{"series":"Finance","year":2008,"month":10,"count":434,"rate":4.5,"date":"2008-10-01T07:00:00.000Z"},{"series":"Finance","year":2008,"month":11,"count":494,"rate":5.2,"date":"2008-11-01T07:00:00.000Z"},{"series":"Finance","year":2008,"month":12,"count":540,"rate":5.6,"date":"2008-12-01T08:00:00.000Z"},{"series":"Finance","year":2009,"month":1,"count":571,"rate":6,"date":"2009-01-01T08:00:00.000Z"},{"series":"Finance","year":2009,"month":2,"count":637,"rate":6.7,"date":"2009-02-01T08:00:00.000Z"},{"series":"Finance","year":2009,"month":3,"count":639,"rate":6.8,"date":"2009-03-01T08:00:00.000Z"},{"series":"Finance","year":2009,"month":4,"count":561,"rate":6,"date":"2009-04-01T07:00:00.000Z"},{"series":"Finance","year":2009,"month":5,"count":536,"rate":5.7,"date":"2009-05-01T07:00:00.000Z"},{"series":"Finance","year":2009,"month":6,"count":513,"rate":5.5,"date":"2009-06-01T07:00:00.000Z"},{"series":"Finance","year":2009,"month":7,"count":570,"rate":6.1,"date":"2009-07-01T07:00:00.000Z"},{"series":"Finance","year":2009,"month":8,"count":566,"rate":6,"date":"2009-08-01T07:00:00.000Z"},{"series":"Finance","year":2009,"month":9,"count":657,"rate":7.1,"date":"2009-09-01T07:00:00.000Z"},{"series":"Finance","year":2009,"month":10,"count":646,"rate":7,"date":"2009-10-01T07:00:00.000Z"},{"series":"Finance","year":2009,"month":11,"count":619,"rate":6.7,"date":"2009-11-01T07:00:00.000Z"},{"series":"Finance","year":2009,"month":12,"count":665,"rate":7.2,"date":"2009-12-01T08:00:00.000Z"},{"series":"Finance","year":2010,"month":1,"count":623,"rate":6.6,"date":"2010-01-01T08:00:00.000Z"},{"series":"Finance","year":2010,"month":2,"count":708,"rate":7.5,"date":"2010-02-01T08:00:00.000Z"},{"series":"Business services","year":2000,"month":1,"count":655,"rate":5.7,"date":"2000-01-01T08:00:00.000Z"},{"series":"Business services","year":2000,"month":2,"count":587,"rate":5.2,"date":"2000-02-01T08:00:00.000Z"},{"series":"Business services","year":2000,"month":3,"count":623,"rate":5.4,"date":"2000-03-01T08:00:00.000Z"},{"series":"Business services","year":2000,"month":4,"count":517,"rate":4.5,"date":"2000-04-01T08:00:00.000Z"},{"series":"Business services","year":2000,"month":5,"count":561,"rate":4.7,"date":"2000-05-01T07:00:00.000Z"},{"series":"Business services","year":2000,"month":6,"count":545,"rate":4.4,"date":"2000-06-01T07:00:00.000Z"},{"series":"Business services","year":2000,"month":7,"count":636,"rate":5.1,"date":"2000-07-01T07:00:00.000Z"},{"series":"Business services","year":2000,"month":8,"count":584,"rate":4.8,"date":"2000-08-01T07:00:00.000Z"},{"series":"Business services","year":2000,"month":9,"count":559,"rate":4.6,"date":"2000-09-01T07:00:00.000Z"},{"series":"Business services","year":2000,"month":10,"count":504,"rate":4.1,"date":"2000-10-01T07:00:00.000Z"},{"series":"Business services","year":2000,"month":11,"count":547,"rate":4.4,"date":"2000-11-01T08:00:00.000Z"},{"series":"Business services","year":2000,"month":12,"count":564,"rate":4.5,"date":"2000-12-01T08:00:00.000Z"},{"series":"Business services","year":2001,"month":1,"count":734,"rate":5.8,"date":"2001-01-01T08:00:00.000Z"},{"series":"Business services","year":2001,"month":2,"count":724,"rate":5.9,"date":"2001-02-01T08:00:00.000Z"},{"series":"Business services","year":2001,"month":3,"count":652,"rate":5.3,"date":"2001-03-01T08:00:00.000Z"},{"series":"Business services","year":2001,"month":4,"count":655,"rate":5.3,"date":"2001-04-01T08:00:00.000Z"},{"series":"Business services","year":2001,"month":5,"count":652,"rate":5.3,"date":"2001-05-01T07:00:00.000Z"},{"series":"Business services","year":2001,"month":6,"count":694,"rate":5.4,"date":"2001-06-01T07:00:00.000Z"},{"series":"Business services","year":2001,"month":7,"count":731,"rate":5.7,"date":"2001-07-01T07:00:00.000Z"},{"series":"Business services","year":2001,"month":8,"count":790,"rate":6.2,"date":"2001-08-01T07:00:00.000Z"},{"series":"Business services","year":2001,"month":9,"count":810,"rate":6.4,"date":"2001-09-01T07:00:00.000Z"},{"series":"Business services","year":2001,"month":10,"count":910,"rate":7.2,"date":"2001-10-01T07:00:00.000Z"},{"series":"Business services","year":2001,"month":11,"count":946,"rate":7.6,"date":"2001-11-01T08:00:00.000Z"},{"series":"Business services","year":2001,"month":12,"count":921,"rate":7.4,"date":"2001-12-01T08:00:00.000Z"},{"series":"Business services","year":2002,"month":1,"count":1120,"rate":8.9,"date":"2002-01-01T08:00:00.000Z"},{"series":"Business services","year":2002,"month":2,"count":973,"rate":7.7,"date":"2002-02-01T08:00:00.000Z"},{"series":"Business services","year":2002,"month":3,"count":964,"rate":7.5,"date":"2002-03-01T08:00:00.000Z"},{"series":"Business services","year":2002,"month":4,"count":951,"rate":7.3,"date":"2002-04-01T08:00:00.000Z"},{"series":"Business services","year":2002,"month":5,"count":983,"rate":7.7,"date":"2002-05-01T07:00:00.000Z"},{"series":"Business services","year":2002,"month":6,"count":1079,"rate":8.2,"date":"2002-06-01T07:00:00.000Z"},{"series":"Business services","year":2002,"month":7,"count":1075,"rate":8.2,"date":"2002-07-01T07:00:00.000Z"},{"series":"Business services","year":2002,"month":8,"count":926,"rate":7.2,"date":"2002-08-01T07:00:00.000Z"},{"series":"Business services","year":2002,"month":9,"count":1007,"rate":7.8,"date":"2002-09-01T07:00:00.000Z"},{"series":"Business services","year":2002,"month":10,"count":962,"rate":7.5,"date":"2002-10-01T07:00:00.000Z"},{"series":"Business services","year":2002,"month":11,"count":1029,"rate":8.2,"date":"2002-11-01T08:00:00.000Z"},{"series":"Business services","year":2002,"month":12,"count":1038,"rate":8.3,"date":"2002-12-01T08:00:00.000Z"},{"series":"Business services","year":2003,"month":1,"count":1112,"rate":8.9,"date":"2003-01-01T08:00:00.000Z"},{"series":"Business services","year":2003,"month":2,"count":1140,"rate":8.9,"date":"2003-02-01T08:00:00.000Z"},{"series":"Business services","year":2003,"month":3,"count":1190,"rate":9.1,"date":"2003-03-01T08:00:00.000Z"},{"series":"Business services","year":2003,"month":4,"count":1076,"rate":8.3,"date":"2003-04-01T08:00:00.000Z"},{"series":"Business services","year":2003,"month":5,"count":1105,"rate":8.4,"date":"2003-05-01T07:00:00.000Z"},{"series":"Business services","year":2003,"month":6,"count":1092,"rate":8.5,"date":"2003-06-01T07:00:00.000Z"},{"series":"Business services","year":2003,"month":7,"count":1021,"rate":8.2,"date":"2003-07-01T07:00:00.000Z"},{"series":"Business services","year":2003,"month":8,"count":881,"rate":7.2,"date":"2003-08-01T07:00:00.000Z"},{"series":"Business services","year":2003,"month":9,"count":975,"rate":8,"date":"2003-09-01T07:00:00.000Z"},{"series":"Business services","year":2003,"month":10,"count":1014,"rate":8.1,"date":"2003-10-01T07:00:00.000Z"},{"series":"Business services","year":2003,"month":11,"count":948,"rate":7.7,"date":"2003-11-01T08:00:00.000Z"},{"series":"Business services","year":2003,"month":12,"count":948,"rate":7.6,"date":"2003-12-01T08:00:00.000Z"},{"series":"Business services","year":2004,"month":1,"count":1070,"rate":8.7,"date":"2004-01-01T08:00:00.000Z"},{"series":"Business services","year":2004,"month":2,"count":964,"rate":7.7,"date":"2004-02-01T08:00:00.000Z"},{"series":"Business services","year":2004,"month":3,"count":999,"rate":7.9,"date":"2004-03-01T08:00:00.000Z"},{"series":"Business services","year":2004,"month":4,"count":752,"rate":6,"date":"2004-04-01T08:00:00.000Z"},{"series":"Business services","year":2004,"month":5,"count":819,"rate":6.5,"date":"2004-05-01T07:00:00.000Z"},{"series":"Business services","year":2004,"month":6,"count":814,"rate":6.5,"date":"2004-06-01T07:00:00.000Z"},{"series":"Business services","year":2004,"month":7,"count":790,"rate":6.2,"date":"2004-07-01T07:00:00.000Z"},{"series":"Business services","year":2004,"month":8,"count":845,"rate":6.7,"date":"2004-08-01T07:00:00.000Z"},{"series":"Business services","year":2004,"month":9,"count":750,"rate":5.9,"date":"2004-09-01T07:00:00.000Z"},{"series":"Business services","year":2004,"month":10,"count":781,"rate":6.2,"date":"2004-10-01T07:00:00.000Z"},{"series":"Business services","year":2004,"month":11,"count":872,"rate":6.8,"date":"2004-11-01T08:00:00.000Z"},{"series":"Business services","year":2004,"month":12,"count":875,"rate":6.9,"date":"2004-12-01T08:00:00.000Z"},{"series":"Business services","year":2005,"month":1,"count":958,"rate":7.6,"date":"2005-01-01T08:00:00.000Z"},{"series":"Business services","year":2005,"month":2,"count":916,"rate":7.2,"date":"2005-02-01T08:00:00.000Z"},{"series":"Business services","year":2005,"month":3,"count":807,"rate":6.5,"date":"2005-03-01T08:00:00.000Z"},{"series":"Business services","year":2005,"month":4,"count":714,"rate":5.7,"date":"2005-04-01T08:00:00.000Z"},{"series":"Business services","year":2005,"month":5,"count":730,"rate":5.9,"date":"2005-05-01T07:00:00.000Z"},{"series":"Business services","year":2005,"month":6,"count":743,"rate":5.8,"date":"2005-06-01T07:00:00.000Z"},{"series":"Business services","year":2005,"month":7,"count":804,"rate":6.3,"date":"2005-07-01T07:00:00.000Z"},{"series":"Business services","year":2005,"month":8,"count":728,"rate":5.7,"date":"2005-08-01T07:00:00.000Z"},{"series":"Business services","year":2005,"month":9,"count":862,"rate":6.7,"date":"2005-09-01T07:00:00.000Z"},{"series":"Business services","year":2005,"month":10,"count":748,"rate":5.8,"date":"2005-10-01T07:00:00.000Z"},{"series":"Business services","year":2005,"month":11,"count":711,"rate":5.5,"date":"2005-11-01T08:00:00.000Z"},{"series":"Business services","year":2005,"month":12,"count":788,"rate":6.1,"date":"2005-12-01T08:00:00.000Z"},{"series":"Business services","year":2006,"month":1,"count":825,"rate":6.5,"date":"2006-01-01T08:00:00.000Z"},{"series":"Business services","year":2006,"month":2,"count":841,"rate":6.5,"date":"2006-02-01T08:00:00.000Z"},{"series":"Business services","year":2006,"month":3,"count":824,"rate":6.3,"date":"2006-03-01T08:00:00.000Z"},{"series":"Business services","year":2006,"month":4,"count":644,"rate":4.9,"date":"2006-04-01T08:00:00.000Z"},{"series":"Business services","year":2006,"month":5,"count":695,"rate":5.3,"date":"2006-05-01T07:00:00.000Z"},{"series":"Business services","year":2006,"month":6,"count":753,"rate":5.7,"date":"2006-06-01T07:00:00.000Z"},{"series":"Business services","year":2006,"month":7,"count":735,"rate":5.5,"date":"2006-07-01T07:00:00.000Z"},{"series":"Business services","year":2006,"month":8,"count":681,"rate":5.1,"date":"2006-08-01T07:00:00.000Z"},{"series":"Business services","year":2006,"month":9,"count":736,"rate":5.6,"date":"2006-09-01T07:00:00.000Z"},{"series":"Business services","year":2006,"month":10,"count":768,"rate":5.6,"date":"2006-10-01T07:00:00.000Z"},{"series":"Business services","year":2006,"month":11,"count":658,"rate":4.9,"date":"2006-11-01T08:00:00.000Z"},{"series":"Business services","year":2006,"month":12,"count":791,"rate":5.9,"date":"2006-12-01T08:00:00.000Z"},{"series":"Business services","year":2007,"month":1,"count":885,"rate":6.5,"date":"2007-01-01T08:00:00.000Z"},{"series":"Business services","year":2007,"month":2,"count":825,"rate":6,"date":"2007-02-01T08:00:00.000Z"},{"series":"Business services","year":2007,"month":3,"count":775,"rate":5.7,"date":"2007-03-01T08:00:00.000Z"},{"series":"Business services","year":2007,"month":4,"count":689,"rate":5,"date":"2007-04-01T07:00:00.000Z"},{"series":"Business services","year":2007,"month":5,"count":743,"rate":5.4,"date":"2007-05-01T07:00:00.000Z"},{"series":"Business services","year":2007,"month":6,"count":722,"rate":5.2,"date":"2007-06-01T07:00:00.000Z"},{"series":"Business services","year":2007,"month":7,"count":743,"rate":5.2,"date":"2007-07-01T07:00:00.000Z"},{"series":"Business services","year":2007,"month":8,"count":683,"rate":4.9,"date":"2007-08-01T07:00:00.000Z"},{"series":"Business services","year":2007,"month":9,"count":655,"rate":4.7,"date":"2007-09-01T07:00:00.000Z"},{"series":"Business services","year":2007,"month":10,"count":675,"rate":4.8,"date":"2007-10-01T07:00:00.000Z"},{"series":"Business services","year":2007,"month":11,"count":679,"rate":4.8,"date":"2007-11-01T07:00:00.000Z"},{"series":"Business services","year":2007,"month":12,"count":803,"rate":5.7,"date":"2007-12-01T08:00:00.000Z"},{"series":"Business services","year":2008,"month":1,"count":893,"rate":6.4,"date":"2008-01-01T08:00:00.000Z"},{"series":"Business services","year":2008,"month":2,"count":866,"rate":6.2,"date":"2008-02-01T08:00:00.000Z"},{"series":"Business services","year":2008,"month":3,"count":876,"rate":6.2,"date":"2008-03-01T08:00:00.000Z"},{"series":"Business services","year":2008,"month":4,"count":736,"rate":5.3,"date":"2008-04-01T07:00:00.000Z"},{"series":"Business services","year":2008,"month":5,"count":829,"rate":5.9,"date":"2008-05-01T07:00:00.000Z"},{"series":"Business services","year":2008,"month":6,"count":890,"rate":6.2,"date":"2008-06-01T07:00:00.000Z"},{"series":"Business services","year":2008,"month":7,"count":866,"rate":6.1,"date":"2008-07-01T07:00:00.000Z"},{"series":"Business services","year":2008,"month":8,"count":961,"rate":6.9,"date":"2008-08-01T07:00:00.000Z"},{"series":"Business services","year":2008,"month":9,"count":951,"rate":6.9,"date":"2008-09-01T07:00:00.000Z"},{"series":"Business services","year":2008,"month":10,"count":1052,"rate":7.5,"date":"2008-10-01T07:00:00.000Z"},{"series":"Business services","year":2008,"month":11,"count":992,"rate":7,"date":"2008-11-01T07:00:00.000Z"},{"series":"Business services","year":2008,"month":12,"count":1147,"rate":8.1,"date":"2008-12-01T08:00:00.000Z"},{"series":"Business services","year":2009,"month":1,"count":1445,"rate":10.4,"date":"2009-01-01T08:00:00.000Z"},{"series":"Business services","year":2009,"month":2,"count":1512,"rate":10.8,"date":"2009-02-01T08:00:00.000Z"},{"series":"Business services","year":2009,"month":3,"count":1597,"rate":11.4,"date":"2009-03-01T08:00:00.000Z"},{"series":"Business services","year":2009,"month":4,"count":1448,"rate":10.4,"date":"2009-04-01T07:00:00.000Z"},{"series":"Business services","year":2009,"month":5,"count":1514,"rate":10.9,"date":"2009-05-01T07:00:00.000Z"},{"series":"Business services","year":2009,"month":6,"count":1580,"rate":11.3,"date":"2009-06-01T07:00:00.000Z"},{"series":"Business services","year":2009,"month":7,"count":1531,"rate":10.9,"date":"2009-07-01T07:00:00.000Z"},{"series":"Business services","year":2009,"month":8,"count":1560,"rate":11,"date":"2009-08-01T07:00:00.000Z"},{"series":"Business services","year":2009,"month":9,"count":1596,"rate":11.3,"date":"2009-09-01T07:00:00.000Z"},{"series":"Business services","year":2009,"month":10,"count":1488,"rate":10.3,"date":"2009-10-01T07:00:00.000Z"},{"series":"Business services","year":2009,"month":11,"count":1514,"rate":10.6,"date":"2009-11-01T07:00:00.000Z"},{"series":"Business services","year":2009,"month":12,"count":1486,"rate":10.3,"date":"2009-12-01T08:00:00.000Z"},{"series":"Business services","year":2010,"month":1,"count":1614,"rate":11.1,"date":"2010-01-01T08:00:00.000Z"},{"series":"Business services","year":2010,"month":2,"count":1740,"rate":12,"date":"2010-02-01T08:00:00.000Z"},{"series":"Education and Health","year":2000,"month":1,"count":353,"rate":2.3,"date":"2000-01-01T08:00:00.000Z"},{"series":"Education and Health","year":2000,"month":2,"count":349,"rate":2.2,"date":"2000-02-01T08:00:00.000Z"},{"series":"Education and Health","year":2000,"month":3,"count":381,"rate":2.5,"date":"2000-03-01T08:00:00.000Z"},{"series":"Education and Health","year":2000,"month":4,"count":329,"rate":2.1,"date":"2000-04-01T08:00:00.000Z"},{"series":"Education and Health","year":2000,"month":5,"count":423,"rate":2.7,"date":"2000-05-01T07:00:00.000Z"},{"series":"Education and Health","year":2000,"month":6,"count":452,"rate":2.9,"date":"2000-06-01T07:00:00.000Z"},{"series":"Education and Health","year":2000,"month":7,"count":478,"rate":3.1,"date":"2000-07-01T07:00:00.000Z"},{"series":"Education and Health","year":2000,"month":8,"count":450,"rate":2.9,"date":"2000-08-01T07:00:00.000Z"},{"series":"Education and Health","year":2000,"month":9,"count":398,"rate":2.6,"date":"2000-09-01T07:00:00.000Z"},{"series":"Education and Health","year":2000,"month":10,"count":339,"rate":2.1,"date":"2000-10-01T07:00:00.000Z"},{"series":"Education and Health","year":2000,"month":11,"count":351,"rate":2.2,"date":"2000-11-01T08:00:00.000Z"},{"series":"Education and Health","year":2000,"month":12,"count":293,"rate":1.8,"date":"2000-12-01T08:00:00.000Z"},{"series":"Education and Health","year":2001,"month":1,"count":428,"rate":2.6,"date":"2001-01-01T08:00:00.000Z"},{"series":"Education and Health","year":2001,"month":2,"count":423,"rate":2.6,"date":"2001-02-01T08:00:00.000Z"},{"series":"Education and Health","year":2001,"month":3,"count":456,"rate":2.8,"date":"2001-03-01T08:00:00.000Z"},{"series":"Education and Health","year":2001,"month":4,"count":341,"rate":2.1,"date":"2001-04-01T08:00:00.000Z"},{"series":"Education and Health","year":2001,"month":5,"count":390,"rate":2.4,"date":"2001-05-01T07:00:00.000Z"},{"series":"Education and Health","year":2001,"month":6,"count":476,"rate":3,"date":"2001-06-01T07:00:00.000Z"},{"series":"Education and Health","year":2001,"month":7,"count":513,"rate":3.1,"date":"2001-07-01T07:00:00.000Z"},{"series":"Education and Health","year":2001,"month":8,"count":595,"rate":3.7,"date":"2001-08-01T07:00:00.000Z"},{"series":"Education and Health","year":2001,"month":9,"count":455,"rate":2.8,"date":"2001-09-01T07:00:00.000Z"},{"series":"Education and Health","year":2001,"month":10,"count":486,"rate":2.9,"date":"2001-10-01T07:00:00.000Z"},{"series":"Education and Health","year":2001,"month":11,"count":516,"rate":3.1,"date":"2001-11-01T08:00:00.000Z"},{"series":"Education and Health","year":2001,"month":12,"count":483,"rate":2.9,"date":"2001-12-01T08:00:00.000Z"},{"series":"Education and Health","year":2002,"month":1,"count":586,"rate":3.5,"date":"2002-01-01T08:00:00.000Z"},{"series":"Education and Health","year":2002,"month":2,"count":590,"rate":3.5,"date":"2002-02-01T08:00:00.000Z"},{"series":"Education and Health","year":2002,"month":3,"count":540,"rate":3.2,"date":"2002-03-01T08:00:00.000Z"},{"series":"Education and Health","year":2002,"month":4,"count":493,"rate":2.9,"date":"2002-04-01T08:00:00.000Z"},{"series":"Education and Health","year":2002,"month":5,"count":533,"rate":3.2,"date":"2002-05-01T07:00:00.000Z"},{"series":"Education and Health","year":2002,"month":6,"count":638,"rate":3.9,"date":"2002-06-01T07:00:00.000Z"},{"series":"Education and Health","year":2002,"month":7,"count":671,"rate":4,"date":"2002-07-01T07:00:00.000Z"},{"series":"Education and Health","year":2002,"month":8,"count":660,"rate":3.9,"date":"2002-08-01T07:00:00.000Z"},{"series":"Education and Health","year":2002,"month":9,"count":562,"rate":3.2,"date":"2002-09-01T07:00:00.000Z"},{"series":"Education and Health","year":2002,"month":10,"count":517,"rate":3,"date":"2002-10-01T07:00:00.000Z"},{"series":"Education and Health","year":2002,"month":11,"count":493,"rate":2.8,"date":"2002-11-01T08:00:00.000Z"},{"series":"Education and Health","year":2002,"month":12,"count":558,"rate":3.2,"date":"2002-12-01T08:00:00.000Z"},{"series":"Education and Health","year":2003,"month":1,"count":559,"rate":3.2,"date":"2003-01-01T08:00:00.000Z"},{"series":"Education and Health","year":2003,"month":2,"count":576,"rate":3.2,"date":"2003-02-01T08:00:00.000Z"},{"series":"Education and Health","year":2003,"month":3,"count":518,"rate":2.9,"date":"2003-03-01T08:00:00.000Z"},{"series":"Education and Health","year":2003,"month":4,"count":611,"rate":3.4,"date":"2003-04-01T08:00:00.000Z"},{"series":"Education and Health","year":2003,"month":5,"count":618,"rate":3.5,"date":"2003-05-01T07:00:00.000Z"},{"series":"Education and Health","year":2003,"month":6,"count":769,"rate":4.4,"date":"2003-06-01T07:00:00.000Z"},{"series":"Education and Health","year":2003,"month":7,"count":697,"rate":4,"date":"2003-07-01T07:00:00.000Z"},{"series":"Education and Health","year":2003,"month":8,"count":760,"rate":4.3,"date":"2003-08-01T07:00:00.000Z"},{"series":"Education and Health","year":2003,"month":9,"count":649,"rate":3.7,"date":"2003-09-01T07:00:00.000Z"},{"series":"Education and Health","year":2003,"month":10,"count":639,"rate":3.6,"date":"2003-10-01T07:00:00.000Z"},{"series":"Education and Health","year":2003,"month":11,"count":662,"rate":3.8,"date":"2003-11-01T08:00:00.000Z"},{"series":"Education and Health","year":2003,"month":12,"count":620,"rate":3.5,"date":"2003-12-01T08:00:00.000Z"},{"series":"Education and Health","year":2004,"month":1,"count":662,"rate":3.7,"date":"2004-01-01T08:00:00.000Z"},{"series":"Education and Health","year":2004,"month":2,"count":608,"rate":3.4,"date":"2004-02-01T08:00:00.000Z"},{"series":"Education and Health","year":2004,"month":3,"count":584,"rate":3.2,"date":"2004-03-01T08:00:00.000Z"},{"series":"Education and Health","year":2004,"month":4,"count":589,"rate":3.3,"date":"2004-04-01T08:00:00.000Z"},{"series":"Education and Health","year":2004,"month":5,"count":570,"rate":3.2,"date":"2004-05-01T07:00:00.000Z"},{"series":"Education and Health","year":2004,"month":6,"count":769,"rate":4.2,"date":"2004-06-01T07:00:00.000Z"},{"series":"Education and Health","year":2004,"month":7,"count":725,"rate":4,"date":"2004-07-01T07:00:00.000Z"},{"series":"Education and Health","year":2004,"month":8,"count":647,"rate":3.7,"date":"2004-08-01T07:00:00.000Z"},{"series":"Education and Health","year":2004,"month":9,"count":593,"rate":3.3,"date":"2004-09-01T07:00:00.000Z"},{"series":"Education and Health","year":2004,"month":10,"count":526,"rate":2.9,"date":"2004-10-01T07:00:00.000Z"},{"series":"Education and Health","year":2004,"month":11,"count":570,"rate":3.2,"date":"2004-11-01T08:00:00.000Z"},{"series":"Education and Health","year":2004,"month":12,"count":562,"rate":3.1,"date":"2004-12-01T08:00:00.000Z"},{"series":"Education and Health","year":2005,"month":1,"count":613,"rate":3.4,"date":"2005-01-01T08:00:00.000Z"},{"series":"Education and Health","year":2005,"month":2,"count":619,"rate":3.4,"date":"2005-02-01T08:00:00.000Z"},{"series":"Education and Health","year":2005,"month":3,"count":614,"rate":3.4,"date":"2005-03-01T08:00:00.000Z"},{"series":"Education and Health","year":2005,"month":4,"count":591,"rate":3.3,"date":"2005-04-01T08:00:00.000Z"},{"series":"Education and Health","year":2005,"month":5,"count":648,"rate":3.6,"date":"2005-05-01T07:00:00.000Z"},{"series":"Education and Health","year":2005,"month":6,"count":667,"rate":3.6,"date":"2005-06-01T07:00:00.000Z"},{"series":"Education and Health","year":2005,"month":7,"count":635,"rate":3.5,"date":"2005-07-01T07:00:00.000Z"},{"series":"Education and Health","year":2005,"month":8,"count":644,"rate":3.5,"date":"2005-08-01T07:00:00.000Z"},{"series":"Education and Health","year":2005,"month":9,"count":658,"rate":3.5,"date":"2005-09-01T07:00:00.000Z"},{"series":"Education and Health","year":2005,"month":10,"count":628,"rate":3.4,"date":"2005-10-01T07:00:00.000Z"},{"series":"Education and Health","year":2005,"month":11,"count":677,"rate":3.6,"date":"2005-11-01T08:00:00.000Z"},{"series":"Education and Health","year":2005,"month":12,"count":529,"rate":2.8,"date":"2005-12-01T08:00:00.000Z"},{"series":"Education and Health","year":2006,"month":1,"count":593,"rate":3.2,"date":"2006-01-01T08:00:00.000Z"},{"series":"Education and Health","year":2006,"month":2,"count":528,"rate":2.8,"date":"2006-02-01T08:00:00.000Z"},{"series":"Education and Health","year":2006,"month":3,"count":563,"rate":3,"date":"2006-03-01T08:00:00.000Z"},{"series":"Education and Health","year":2006,"month":4,"count":558,"rate":3,"date":"2006-04-01T08:00:00.000Z"},{"series":"Education and Health","year":2006,"month":5,"count":543,"rate":2.9,"date":"2006-05-01T07:00:00.000Z"},{"series":"Education and Health","year":2006,"month":6,"count":617,"rate":3.3,"date":"2006-06-01T07:00:00.000Z"},{"series":"Education and Health","year":2006,"month":7,"count":659,"rate":3.5,"date":"2006-07-01T07:00:00.000Z"},{"series":"Education and Health","year":2006,"month":8,"count":611,"rate":3.2,"date":"2006-08-01T07:00:00.000Z"},{"series":"Education and Health","year":2006,"month":9,"count":576,"rate":3,"date":"2006-09-01T07:00:00.000Z"},{"series":"Education and Health","year":2006,"month":10,"count":531,"rate":2.8,"date":"2006-10-01T07:00:00.000Z"},{"series":"Education and Health","year":2006,"month":11,"count":536,"rate":2.8,"date":"2006-11-01T08:00:00.000Z"},{"series":"Education and Health","year":2006,"month":12,"count":502,"rate":2.6,"date":"2006-12-01T08:00:00.000Z"},{"series":"Education and Health","year":2007,"month":1,"count":563,"rate":2.9,"date":"2007-01-01T08:00:00.000Z"},{"series":"Education and Health","year":2007,"month":2,"count":489,"rate":2.5,"date":"2007-02-01T08:00:00.000Z"},{"series":"Education and Health","year":2007,"month":3,"count":495,"rate":2.5,"date":"2007-03-01T08:00:00.000Z"},{"series":"Education and Health","year":2007,"month":4,"count":555,"rate":2.9,"date":"2007-04-01T07:00:00.000Z"},{"series":"Education and Health","year":2007,"month":5,"count":622,"rate":3.3,"date":"2007-05-01T07:00:00.000Z"},{"series":"Education and Health","year":2007,"month":6,"count":653,"rate":3.4,"date":"2007-06-01T07:00:00.000Z"},{"series":"Education and Health","year":2007,"month":7,"count":665,"rate":3.5,"date":"2007-07-01T07:00:00.000Z"},{"series":"Education and Health","year":2007,"month":8,"count":648,"rate":3.4,"date":"2007-08-01T07:00:00.000Z"},{"series":"Education and Health","year":2007,"month":9,"count":630,"rate":3.2,"date":"2007-09-01T07:00:00.000Z"},{"series":"Education and Health","year":2007,"month":10,"count":534,"rate":2.7,"date":"2007-10-01T07:00:00.000Z"},{"series":"Education and Health","year":2007,"month":11,"count":526,"rate":2.7,"date":"2007-11-01T07:00:00.000Z"},{"series":"Education and Health","year":2007,"month":12,"count":521,"rate":2.6,"date":"2007-12-01T08:00:00.000Z"},{"series":"Education and Health","year":2008,"month":1,"count":576,"rate":2.9,"date":"2008-01-01T08:00:00.000Z"},{"series":"Education and Health","year":2008,"month":2,"count":562,"rate":2.9,"date":"2008-02-01T08:00:00.000Z"},{"series":"Education and Health","year":2008,"month":3,"count":609,"rate":3.1,"date":"2008-03-01T08:00:00.000Z"},{"series":"Education and Health","year":2008,"month":4,"count":551,"rate":2.8,"date":"2008-04-01T07:00:00.000Z"},{"series":"Education and Health","year":2008,"month":5,"count":619,"rate":3.2,"date":"2008-05-01T07:00:00.000Z"},{"series":"Education and Health","year":2008,"month":6,"count":669,"rate":3.4,"date":"2008-06-01T07:00:00.000Z"},{"series":"Education and Health","year":2008,"month":7,"count":776,"rate":3.9,"date":"2008-07-01T07:00:00.000Z"},{"series":"Education and Health","year":2008,"month":8,"count":844,"rate":4.3,"date":"2008-08-01T07:00:00.000Z"},{"series":"Education and Health","year":2008,"month":9,"count":835,"rate":4.1,"date":"2008-09-01T07:00:00.000Z"},{"series":"Education and Health","year":2008,"month":10,"count":797,"rate":3.9,"date":"2008-10-01T07:00:00.000Z"},{"series":"Education and Health","year":2008,"month":11,"count":748,"rate":3.6,"date":"2008-11-01T07:00:00.000Z"},{"series":"Education and Health","year":2008,"month":12,"count":791,"rate":3.8,"date":"2008-12-01T08:00:00.000Z"},{"series":"Education and Health","year":2009,"month":1,"count":792,"rate":3.8,"date":"2009-01-01T08:00:00.000Z"},{"series":"Education and Health","year":2009,"month":2,"count":847,"rate":4.1,"date":"2009-02-01T08:00:00.000Z"},{"series":"Education and Health","year":2009,"month":3,"count":931,"rate":4.5,"date":"2009-03-01T08:00:00.000Z"},{"series":"Education and Health","year":2009,"month":4,"count":964,"rate":4.6,"date":"2009-04-01T07:00:00.000Z"},{"series":"Education and Health","year":2009,"month":5,"count":1005,"rate":4.9,"date":"2009-05-01T07:00:00.000Z"},{"series":"Education and Health","year":2009,"month":6,"count":1267,"rate":6.1,"date":"2009-06-01T07:00:00.000Z"},{"series":"Education and Health","year":2009,"month":7,"count":1269,"rate":6.1,"date":"2009-07-01T07:00:00.000Z"},{"series":"Education and Health","year":2009,"month":8,"count":1239,"rate":6,"date":"2009-08-01T07:00:00.000Z"},{"series":"Education and Health","year":2009,"month":9,"count":1257,"rate":6,"date":"2009-09-01T07:00:00.000Z"},{"series":"Education and Health","year":2009,"month":10,"count":1280,"rate":6,"date":"2009-10-01T07:00:00.000Z"},{"series":"Education and Health","year":2009,"month":11,"count":1168,"rate":5.5,"date":"2009-11-01T07:00:00.000Z"},{"series":"Education and Health","year":2009,"month":12,"count":1183,"rate":5.6,"date":"2009-12-01T08:00:00.000Z"},{"series":"Education and Health","year":2010,"month":1,"count":1175,"rate":5.5,"date":"2010-01-01T08:00:00.000Z"},{"series":"Education and Health","year":2010,"month":2,"count":1200,"rate":5.6,"date":"2010-02-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2000,"month":1,"count":782,"rate":7.5,"date":"2000-01-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2000,"month":2,"count":779,"rate":7.5,"date":"2000-02-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2000,"month":3,"count":789,"rate":7.4,"date":"2000-03-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2000,"month":4,"count":658,"rate":6.1,"date":"2000-04-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2000,"month":5,"count":675,"rate":6.2,"date":"2000-05-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2000,"month":6,"count":833,"rate":7.3,"date":"2000-06-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2000,"month":7,"count":786,"rate":6.8,"date":"2000-07-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2000,"month":8,"count":675,"rate":6,"date":"2000-08-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2000,"month":9,"count":636,"rate":5.9,"date":"2000-09-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2000,"month":10,"count":691,"rate":6.5,"date":"2000-10-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2000,"month":11,"count":694,"rate":6.5,"date":"2000-11-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2000,"month":12,"count":639,"rate":5.9,"date":"2000-12-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2001,"month":1,"count":806,"rate":7.7,"date":"2001-01-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2001,"month":2,"count":821,"rate":7.5,"date":"2001-02-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2001,"month":3,"count":817,"rate":7.4,"date":"2001-03-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2001,"month":4,"count":744,"rate":6.8,"date":"2001-04-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2001,"month":5,"count":731,"rate":6.7,"date":"2001-05-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2001,"month":6,"count":821,"rate":7,"date":"2001-06-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2001,"month":7,"count":813,"rate":6.8,"date":"2001-07-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2001,"month":8,"count":767,"rate":6.8,"date":"2001-08-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2001,"month":9,"count":900,"rate":8,"date":"2001-09-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2001,"month":10,"count":903,"rate":8.3,"date":"2001-10-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2001,"month":11,"count":935,"rate":8.5,"date":"2001-11-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2001,"month":12,"count":938,"rate":8.5,"date":"2001-12-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2002,"month":1,"count":947,"rate":8.6,"date":"2002-01-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2002,"month":2,"count":973,"rate":8.7,"date":"2002-02-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2002,"month":3,"count":976,"rate":8.5,"date":"2002-03-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2002,"month":4,"count":953,"rate":8.4,"date":"2002-04-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2002,"month":5,"count":1022,"rate":8.6,"date":"2002-05-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2002,"month":6,"count":1034,"rate":8.5,"date":"2002-06-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2002,"month":7,"count":999,"rate":8.2,"date":"2002-07-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2002,"month":8,"count":884,"rate":7.5,"date":"2002-08-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2002,"month":9,"count":885,"rate":7.9,"date":"2002-09-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2002,"month":10,"count":956,"rate":8.5,"date":"2002-10-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2002,"month":11,"count":978,"rate":8.9,"date":"2002-11-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2002,"month":12,"count":922,"rate":8.2,"date":"2002-12-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2003,"month":1,"count":1049,"rate":9.3,"date":"2003-01-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2003,"month":2,"count":1145,"rate":10,"date":"2003-02-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2003,"month":3,"count":1035,"rate":8.9,"date":"2003-03-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2003,"month":4,"count":986,"rate":8.5,"date":"2003-04-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2003,"month":5,"count":955,"rate":7.9,"date":"2003-05-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2003,"month":6,"count":1048,"rate":8.6,"date":"2003-06-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2003,"month":7,"count":1020,"rate":8.4,"date":"2003-07-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2003,"month":8,"count":1050,"rate":9,"date":"2003-08-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2003,"month":9,"count":978,"rate":8.8,"date":"2003-09-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2003,"month":10,"count":933,"rate":8.3,"date":"2003-10-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2003,"month":11,"count":990,"rate":9,"date":"2003-11-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2003,"month":12,"count":885,"rate":8.2,"date":"2003-12-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2004,"month":1,"count":1097,"rate":10,"date":"2004-01-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2004,"month":2,"count":987,"rate":8.9,"date":"2004-02-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2004,"month":3,"count":1039,"rate":9,"date":"2004-03-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2004,"month":4,"count":925,"rate":7.9,"date":"2004-04-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2004,"month":5,"count":977,"rate":8.1,"date":"2004-05-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2004,"month":6,"count":1189,"rate":9.6,"date":"2004-06-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2004,"month":7,"count":965,"rate":7.8,"date":"2004-07-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2004,"month":8,"count":1010,"rate":8.4,"date":"2004-08-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2004,"month":9,"count":854,"rate":7.5,"date":"2004-09-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2004,"month":10,"count":853,"rate":7.3,"date":"2004-10-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2004,"month":11,"count":916,"rate":7.9,"date":"2004-11-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2004,"month":12,"count":850,"rate":7.4,"date":"2004-12-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2005,"month":1,"count":993,"rate":8.7,"date":"2005-01-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2005,"month":2,"count":1008,"rate":8.8,"date":"2005-02-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2005,"month":3,"count":967,"rate":8.3,"date":"2005-03-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2005,"month":4,"count":882,"rate":7.7,"date":"2005-04-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2005,"month":5,"count":944,"rate":7.7,"date":"2005-05-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2005,"month":6,"count":950,"rate":7.6,"date":"2005-06-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2005,"month":7,"count":929,"rate":7.4,"date":"2005-07-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2005,"month":8,"count":844,"rate":6.8,"date":"2005-08-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2005,"month":9,"count":842,"rate":7.3,"date":"2005-09-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2005,"month":10,"count":796,"rate":6.8,"date":"2005-10-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2005,"month":11,"count":966,"rate":8.1,"date":"2005-11-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2005,"month":12,"count":930,"rate":7.9,"date":"2005-12-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2006,"month":1,"count":910,"rate":8.1,"date":"2006-01-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2006,"month":2,"count":1040,"rate":9.1,"date":"2006-02-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2006,"month":3,"count":917,"rate":8,"date":"2006-03-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2006,"month":4,"count":882,"rate":7.6,"date":"2006-04-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2006,"month":5,"count":830,"rate":7,"date":"2006-05-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2006,"month":6,"count":942,"rate":7.4,"date":"2006-06-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2006,"month":7,"count":867,"rate":6.8,"date":"2006-07-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2006,"month":8,"count":855,"rate":6.9,"date":"2006-08-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2006,"month":9,"count":810,"rate":6.9,"date":"2006-09-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2006,"month":10,"count":795,"rate":6.6,"date":"2006-10-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2006,"month":11,"count":836,"rate":7.1,"date":"2006-11-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2006,"month":12,"count":701,"rate":5.9,"date":"2006-12-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2007,"month":1,"count":911,"rate":7.8,"date":"2007-01-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2007,"month":2,"count":879,"rate":7.4,"date":"2007-02-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2007,"month":3,"count":845,"rate":7,"date":"2007-03-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2007,"month":4,"count":822,"rate":6.9,"date":"2007-04-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2007,"month":5,"count":831,"rate":6.8,"date":"2007-05-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2007,"month":6,"count":917,"rate":7.2,"date":"2007-06-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2007,"month":7,"count":920,"rate":7.3,"date":"2007-07-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2007,"month":8,"count":877,"rate":7.1,"date":"2007-08-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2007,"month":9,"count":892,"rate":7.4,"date":"2007-09-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2007,"month":10,"count":911,"rate":7.5,"date":"2007-10-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2007,"month":11,"count":986,"rate":8.1,"date":"2007-11-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2007,"month":12,"count":961,"rate":7.9,"date":"2007-12-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2008,"month":1,"count":1176,"rate":9.4,"date":"2008-01-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2008,"month":2,"count":1056,"rate":8.5,"date":"2008-02-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2008,"month":3,"count":944,"rate":7.6,"date":"2008-03-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2008,"month":4,"count":874,"rate":6.9,"date":"2008-04-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2008,"month":5,"count":1074,"rate":8.4,"date":"2008-05-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2008,"month":6,"count":1154,"rate":8.9,"date":"2008-06-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2008,"month":7,"count":1172,"rate":8.8,"date":"2008-07-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2008,"month":8,"count":1122,"rate":8.7,"date":"2008-08-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2008,"month":9,"count":1029,"rate":8.2,"date":"2008-09-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2008,"month":10,"count":1126,"rate":8.9,"date":"2008-10-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2008,"month":11,"count":1283,"rate":9.9,"date":"2008-11-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2008,"month":12,"count":1210,"rate":9.5,"date":"2008-12-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2009,"month":1,"count":1487,"rate":11.5,"date":"2009-01-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2009,"month":2,"count":1477,"rate":11.4,"date":"2009-02-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2009,"month":3,"count":1484,"rate":11.6,"date":"2009-03-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2009,"month":4,"count":1322,"rate":10.2,"date":"2009-04-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2009,"month":5,"count":1599,"rate":11.9,"date":"2009-05-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2009,"month":6,"count":1688,"rate":12.1,"date":"2009-06-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2009,"month":7,"count":1600,"rate":11.2,"date":"2009-07-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2009,"month":8,"count":1636,"rate":12,"date":"2009-08-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2009,"month":9,"count":1469,"rate":11.4,"date":"2009-09-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2009,"month":10,"count":1604,"rate":12.4,"date":"2009-10-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2009,"month":11,"count":1524,"rate":11.9,"date":"2009-11-01T07:00:00.000Z"},{"series":"Leisure and hospitality","year":2009,"month":12,"count":1624,"rate":12.6,"date":"2009-12-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2010,"month":1,"count":1804,"rate":14.2,"date":"2010-01-01T08:00:00.000Z"},{"series":"Leisure and hospitality","year":2010,"month":2,"count":1597,"rate":12.7,"date":"2010-02-01T08:00:00.000Z"},{"series":"Other","year":2000,"month":1,"count":274,"rate":4.9,"date":"2000-01-01T08:00:00.000Z"},{"series":"Other","year":2000,"month":2,"count":232,"rate":4.1,"date":"2000-02-01T08:00:00.000Z"},{"series":"Other","year":2000,"month":3,"count":247,"rate":4.3,"date":"2000-03-01T08:00:00.000Z"},{"series":"Other","year":2000,"month":4,"count":240,"rate":4.2,"date":"2000-04-01T08:00:00.000Z"},{"series":"Other","year":2000,"month":5,"count":254,"rate":4.5,"date":"2000-05-01T07:00:00.000Z"},{"series":"Other","year":2000,"month":6,"count":225,"rate":3.9,"date":"2000-06-01T07:00:00.000Z"},{"series":"Other","year":2000,"month":7,"count":202,"rate":3.7,"date":"2000-07-01T07:00:00.000Z"},{"series":"Other","year":2000,"month":8,"count":187,"rate":3.5,"date":"2000-08-01T07:00:00.000Z"},{"series":"Other","year":2000,"month":9,"count":220,"rate":4,"date":"2000-09-01T07:00:00.000Z"},{"series":"Other","year":2000,"month":10,"count":161,"rate":2.9,"date":"2000-10-01T07:00:00.000Z"},{"series":"Other","year":2000,"month":11,"count":217,"rate":3.8,"date":"2000-11-01T08:00:00.000Z"},{"series":"Other","year":2000,"month":12,"count":167,"rate":2.9,"date":"2000-12-01T08:00:00.000Z"},{"series":"Other","year":2001,"month":1,"count":197,"rate":3.4,"date":"2001-01-01T08:00:00.000Z"},{"series":"Other","year":2001,"month":2,"count":243,"rate":4.2,"date":"2001-02-01T08:00:00.000Z"},{"series":"Other","year":2001,"month":3,"count":200,"rate":3.4,"date":"2001-03-01T08:00:00.000Z"},{"series":"Other","year":2001,"month":4,"count":220,"rate":3.8,"date":"2001-04-01T08:00:00.000Z"},{"series":"Other","year":2001,"month":5,"count":172,"rate":3.2,"date":"2001-05-01T07:00:00.000Z"},{"series":"Other","year":2001,"month":6,"count":246,"rate":4.6,"date":"2001-06-01T07:00:00.000Z"},{"series":"Other","year":2001,"month":7,"count":228,"rate":4.1,"date":"2001-07-01T07:00:00.000Z"},{"series":"Other","year":2001,"month":8,"count":241,"rate":4.5,"date":"2001-08-01T07:00:00.000Z"},{"series":"Other","year":2001,"month":9,"count":225,"rate":4,"date":"2001-09-01T07:00:00.000Z"},{"series":"Other","year":2001,"month":10,"count":239,"rate":4.1,"date":"2001-10-01T07:00:00.000Z"},{"series":"Other","year":2001,"month":11,"count":256,"rate":4.2,"date":"2001-11-01T08:00:00.000Z"},{"series":"Other","year":2001,"month":12,"count":277,"rate":4.5,"date":"2001-12-01T08:00:00.000Z"},{"series":"Other","year":2002,"month":1,"count":304,"rate":5.1,"date":"2002-01-01T08:00:00.000Z"},{"series":"Other","year":2002,"month":2,"count":339,"rate":5.6,"date":"2002-02-01T08:00:00.000Z"},{"series":"Other","year":2002,"month":3,"count":314,"rate":5.5,"date":"2002-03-01T08:00:00.000Z"},{"series":"Other","year":2002,"month":4,"count":268,"rate":4.6,"date":"2002-04-01T08:00:00.000Z"},{"series":"Other","year":2002,"month":5,"count":264,"rate":4.6,"date":"2002-05-01T07:00:00.000Z"},{"series":"Other","year":2002,"month":6,"count":335,"rate":5.5,"date":"2002-06-01T07:00:00.000Z"},{"series":"Other","year":2002,"month":7,"count":356,"rate":5.8,"date":"2002-07-01T07:00:00.000Z"},{"series":"Other","year":2002,"month":8,"count":353,"rate":6,"date":"2002-08-01T07:00:00.000Z"},{"series":"Other","year":2002,"month":9,"count":281,"rate":4.8,"date":"2002-09-01T07:00:00.000Z"},{"series":"Other","year":2002,"month":10,"count":272,"rate":4.6,"date":"2002-10-01T07:00:00.000Z"},{"series":"Other","year":2002,"month":11,"count":284,"rate":4.9,"date":"2002-11-01T08:00:00.000Z"},{"series":"Other","year":2002,"month":12,"count":241,"rate":4.2,"date":"2002-12-01T08:00:00.000Z"},{"series":"Other","year":2003,"month":1,"count":304,"rate":5.3,"date":"2003-01-01T08:00:00.000Z"},{"series":"Other","year":2003,"month":2,"count":331,"rate":5.7,"date":"2003-02-01T08:00:00.000Z"},{"series":"Other","year":2003,"month":3,"count":370,"rate":6.1,"date":"2003-03-01T08:00:00.000Z"},{"series":"Other","year":2003,"month":4,"count":331,"rate":5.5,"date":"2003-04-01T08:00:00.000Z"},{"series":"Other","year":2003,"month":5,"count":339,"rate":5.7,"date":"2003-05-01T07:00:00.000Z"},{"series":"Other","year":2003,"month":6,"count":359,"rate":5.9,"date":"2003-06-01T07:00:00.000Z"},{"series":"Other","year":2003,"month":7,"count":405,"rate":6.6,"date":"2003-07-01T07:00:00.000Z"},{"series":"Other","year":2003,"month":8,"count":373,"rate":6.1,"date":"2003-08-01T07:00:00.000Z"},{"series":"Other","year":2003,"month":9,"count":338,"rate":5.5,"date":"2003-09-01T07:00:00.000Z"},{"series":"Other","year":2003,"month":10,"count":378,"rate":6.1,"date":"2003-10-01T07:00:00.000Z"},{"series":"Other","year":2003,"month":11,"count":357,"rate":5.8,"date":"2003-11-01T08:00:00.000Z"},{"series":"Other","year":2003,"month":12,"count":278,"rate":4.5,"date":"2003-12-01T08:00:00.000Z"},{"series":"Other","year":2004,"month":1,"count":322,"rate":5.3,"date":"2004-01-01T08:00:00.000Z"},{"series":"Other","year":2004,"month":2,"count":366,"rate":5.9,"date":"2004-02-01T08:00:00.000Z"},{"series":"Other","year":2004,"month":3,"count":366,"rate":5.9,"date":"2004-03-01T08:00:00.000Z"},{"series":"Other","year":2004,"month":4,"count":347,"rate":5.6,"date":"2004-04-01T08:00:00.000Z"},{"series":"Other","year":2004,"month":5,"count":310,"rate":5.1,"date":"2004-05-01T07:00:00.000Z"},{"series":"Other","year":2004,"month":6,"count":326,"rate":5.4,"date":"2004-06-01T07:00:00.000Z"},{"series":"Other","year":2004,"month":7,"count":346,"rate":5.6,"date":"2004-07-01T07:00:00.000Z"},{"series":"Other","year":2004,"month":8,"count":341,"rate":5.6,"date":"2004-08-01T07:00:00.000Z"},{"series":"Other","year":2004,"month":9,"count":301,"rate":4.9,"date":"2004-09-01T07:00:00.000Z"},{"series":"Other","year":2004,"month":10,"count":300,"rate":4.8,"date":"2004-10-01T07:00:00.000Z"},{"series":"Other","year":2004,"month":11,"count":294,"rate":4.8,"date":"2004-11-01T08:00:00.000Z"},{"series":"Other","year":2004,"month":12,"count":276,"rate":4.3,"date":"2004-12-01T08:00:00.000Z"},{"series":"Other","year":2005,"month":1,"count":290,"rate":4.7,"date":"2005-01-01T08:00:00.000Z"},{"series":"Other","year":2005,"month":2,"count":325,"rate":5.3,"date":"2005-02-01T08:00:00.000Z"},{"series":"Other","year":2005,"month":3,"count":308,"rate":5,"date":"2005-03-01T08:00:00.000Z"},{"series":"Other","year":2005,"month":4,"count":306,"rate":4.9,"date":"2005-04-01T08:00:00.000Z"},{"series":"Other","year":2005,"month":5,"count":314,"rate":5,"date":"2005-05-01T07:00:00.000Z"},{"series":"Other","year":2005,"month":6,"count":291,"rate":4.6,"date":"2005-06-01T07:00:00.000Z"},{"series":"Other","year":2005,"month":7,"count":274,"rate":4.2,"date":"2005-07-01T07:00:00.000Z"},{"series":"Other","year":2005,"month":8,"count":306,"rate":4.8,"date":"2005-08-01T07:00:00.000Z"},{"series":"Other","year":2005,"month":9,"count":307,"rate":4.9,"date":"2005-09-01T07:00:00.000Z"},{"series":"Other","year":2005,"month":10,"count":319,"rate":5,"date":"2005-10-01T07:00:00.000Z"},{"series":"Other","year":2005,"month":11,"count":300,"rate":4.9,"date":"2005-11-01T08:00:00.000Z"},{"series":"Other","year":2005,"month":12,"count":269,"rate":4.3,"date":"2005-12-01T08:00:00.000Z"},{"series":"Other","year":2006,"month":1,"count":308,"rate":4.9,"date":"2006-01-01T08:00:00.000Z"},{"series":"Other","year":2006,"month":2,"count":281,"rate":4.4,"date":"2006-02-01T08:00:00.000Z"},{"series":"Other","year":2006,"month":3,"count":292,"rate":4.6,"date":"2006-03-01T08:00:00.000Z"},{"series":"Other","year":2006,"month":4,"count":266,"rate":4.1,"date":"2006-04-01T08:00:00.000Z"},{"series":"Other","year":2006,"month":5,"count":265,"rate":4.2,"date":"2006-05-01T07:00:00.000Z"},{"series":"Other","year":2006,"month":6,"count":265,"rate":4.3,"date":"2006-06-01T07:00:00.000Z"},{"series":"Other","year":2006,"month":7,"count":305,"rate":4.7,"date":"2006-07-01T07:00:00.000Z"},{"series":"Other","year":2006,"month":8,"count":341,"rate":5.3,"date":"2006-08-01T07:00:00.000Z"},{"series":"Other","year":2006,"month":9,"count":310,"rate":5,"date":"2006-09-01T07:00:00.000Z"},{"series":"Other","year":2006,"month":10,"count":268,"rate":4.4,"date":"2006-10-01T07:00:00.000Z"},{"series":"Other","year":2006,"month":11,"count":306,"rate":5,"date":"2006-11-01T08:00:00.000Z"},{"series":"Other","year":2006,"month":12,"count":306,"rate":5.2,"date":"2006-12-01T08:00:00.000Z"},{"series":"Other","year":2007,"month":1,"count":275,"rate":4.7,"date":"2007-01-01T08:00:00.000Z"},{"series":"Other","year":2007,"month":2,"count":257,"rate":4.3,"date":"2007-02-01T08:00:00.000Z"},{"series":"Other","year":2007,"month":3,"count":222,"rate":3.7,"date":"2007-03-01T08:00:00.000Z"},{"series":"Other","year":2007,"month":4,"count":224,"rate":3.6,"date":"2007-04-01T07:00:00.000Z"},{"series":"Other","year":2007,"month":5,"count":242,"rate":3.9,"date":"2007-05-01T07:00:00.000Z"},{"series":"Other","year":2007,"month":6,"count":256,"rate":4,"date":"2007-06-01T07:00:00.000Z"},{"series":"Other","year":2007,"month":7,"count":243,"rate":3.8,"date":"2007-07-01T07:00:00.000Z"},{"series":"Other","year":2007,"month":8,"count":239,"rate":3.8,"date":"2007-08-01T07:00:00.000Z"},{"series":"Other","year":2007,"month":9,"count":257,"rate":4.2,"date":"2007-09-01T07:00:00.000Z"},{"series":"Other","year":2007,"month":10,"count":182,"rate":3,"date":"2007-10-01T07:00:00.000Z"},{"series":"Other","year":2007,"month":11,"count":255,"rate":4.1,"date":"2007-11-01T07:00:00.000Z"},{"series":"Other","year":2007,"month":12,"count":235,"rate":3.9,"date":"2007-12-01T08:00:00.000Z"},{"series":"Other","year":2008,"month":1,"count":264,"rate":4.4,"date":"2008-01-01T08:00:00.000Z"},{"series":"Other","year":2008,"month":2,"count":313,"rate":5.1,"date":"2008-02-01T08:00:00.000Z"},{"series":"Other","year":2008,"month":3,"count":283,"rate":4.6,"date":"2008-03-01T08:00:00.000Z"},{"series":"Other","year":2008,"month":4,"count":251,"rate":4,"date":"2008-04-01T07:00:00.000Z"},{"series":"Other","year":2008,"month":5,"count":275,"rate":4.4,"date":"2008-05-01T07:00:00.000Z"},{"series":"Other","year":2008,"month":6,"count":322,"rate":5,"date":"2008-06-01T07:00:00.000Z"},{"series":"Other","year":2008,"month":7,"count":352,"rate":5.2,"date":"2008-07-01T07:00:00.000Z"},{"series":"Other","year":2008,"month":8,"count":412,"rate":6.3,"date":"2008-08-01T07:00:00.000Z"},{"series":"Other","year":2008,"month":9,"count":374,"rate":5.8,"date":"2008-09-01T07:00:00.000Z"},{"series":"Other","year":2008,"month":10,"count":334,"rate":5.3,"date":"2008-10-01T07:00:00.000Z"},{"series":"Other","year":2008,"month":11,"count":434,"rate":7,"date":"2008-11-01T07:00:00.000Z"},{"series":"Other","year":2008,"month":12,"count":367,"rate":6.1,"date":"2008-12-01T08:00:00.000Z"},{"series":"Other","year":2009,"month":1,"count":431,"rate":7.1,"date":"2009-01-01T08:00:00.000Z"},{"series":"Other","year":2009,"month":2,"count":453,"rate":7.3,"date":"2009-02-01T08:00:00.000Z"},{"series":"Other","year":2009,"month":3,"count":377,"rate":6,"date":"2009-03-01T08:00:00.000Z"},{"series":"Other","year":2009,"month":4,"count":403,"rate":6.4,"date":"2009-04-01T07:00:00.000Z"},{"series":"Other","year":2009,"month":5,"count":476,"rate":7.5,"date":"2009-05-01T07:00:00.000Z"},{"series":"Other","year":2009,"month":6,"count":557,"rate":8.4,"date":"2009-06-01T07:00:00.000Z"},{"series":"Other","year":2009,"month":7,"count":490,"rate":7.4,"date":"2009-07-01T07:00:00.000Z"},{"series":"Other","year":2009,"month":8,"count":528,"rate":8.2,"date":"2009-08-01T07:00:00.000Z"},{"series":"Other","year":2009,"month":9,"count":462,"rate":7.1,"date":"2009-09-01T07:00:00.000Z"},{"series":"Other","year":2009,"month":10,"count":541,"rate":8.5,"date":"2009-10-01T07:00:00.000Z"},{"series":"Other","year":2009,"month":11,"count":491,"rate":8,"date":"2009-11-01T07:00:00.000Z"},{"series":"Other","year":2009,"month":12,"count":513,"rate":8.2,"date":"2009-12-01T08:00:00.000Z"},{"series":"Other","year":2010,"month":1,"count":609,"rate":10,"date":"2010-01-01T08:00:00.000Z"},{"series":"Other","year":2010,"month":2,"count":603,"rate":9.9,"date":"2010-02-01T08:00:00.000Z"},{"series":"Agriculture","year":2000,"month":1,"count":154,"rate":10.3,"date":"2000-01-01T08:00:00.000Z"},{"series":"Agriculture","year":2000,"month":2,"count":173,"rate":11.5,"date":"2000-02-01T08:00:00.000Z"},{"series":"Agriculture","year":2000,"month":3,"count":152,"rate":10.4,"date":"2000-03-01T08:00:00.000Z"},{"series":"Agriculture","year":2000,"month":4,"count":135,"rate":8.9,"date":"2000-04-01T08:00:00.000Z"},{"series":"Agriculture","year":2000,"month":5,"count":73,"rate":5.1,"date":"2000-05-01T07:00:00.000Z"},{"series":"Agriculture","year":2000,"month":6,"count":109,"rate":6.7,"date":"2000-06-01T07:00:00.000Z"},{"series":"Agriculture","year":2000,"month":7,"count":77,"rate":5,"date":"2000-07-01T07:00:00.000Z"},{"series":"Agriculture","year":2000,"month":8,"count":110,"rate":7,"date":"2000-08-01T07:00:00.000Z"},{"series":"Agriculture","year":2000,"month":9,"count":124,"rate":8.2,"date":"2000-09-01T07:00:00.000Z"},{"series":"Agriculture","year":2000,"month":10,"count":113,"rate":8,"date":"2000-10-01T07:00:00.000Z"},{"series":"Agriculture","year":2000,"month":11,"count":192,"rate":13.3,"date":"2000-11-01T08:00:00.000Z"},{"series":"Agriculture","year":2000,"month":12,"count":196,"rate":13.9,"date":"2000-12-01T08:00:00.000Z"},{"series":"Agriculture","year":2001,"month":1,"count":188,"rate":13.8,"date":"2001-01-01T08:00:00.000Z"},{"series":"Agriculture","year":2001,"month":2,"count":193,"rate":15.1,"date":"2001-02-01T08:00:00.000Z"},{"series":"Agriculture","year":2001,"month":3,"count":267,"rate":19.2,"date":"2001-03-01T08:00:00.000Z"},{"series":"Agriculture","year":2001,"month":4,"count":140,"rate":10.4,"date":"2001-04-01T08:00:00.000Z"},{"series":"Agriculture","year":2001,"month":5,"count":109,"rate":7.7,"date":"2001-05-01T07:00:00.000Z"},{"series":"Agriculture","year":2001,"month":6,"count":130,"rate":9.7,"date":"2001-06-01T07:00:00.000Z"},{"series":"Agriculture","year":2001,"month":7,"count":113,"rate":7.6,"date":"2001-07-01T07:00:00.000Z"},{"series":"Agriculture","year":2001,"month":8,"count":141,"rate":9.3,"date":"2001-08-01T07:00:00.000Z"},{"series":"Agriculture","year":2001,"month":9,"count":101,"rate":7.2,"date":"2001-09-01T07:00:00.000Z"},{"series":"Agriculture","year":2001,"month":10,"count":118,"rate":8.7,"date":"2001-10-01T07:00:00.000Z"},{"series":"Agriculture","year":2001,"month":11,"count":145,"rate":11.6,"date":"2001-11-01T08:00:00.000Z"},{"series":"Agriculture","year":2001,"month":12,"count":192,"rate":15.1,"date":"2001-12-01T08:00:00.000Z"},{"series":"Agriculture","year":2002,"month":1,"count":195,"rate":14.8,"date":"2002-01-01T08:00:00.000Z"},{"series":"Agriculture","year":2002,"month":2,"count":187,"rate":14.8,"date":"2002-02-01T08:00:00.000Z"},{"series":"Agriculture","year":2002,"month":3,"count":269,"rate":19.6,"date":"2002-03-01T08:00:00.000Z"},{"series":"Agriculture","year":2002,"month":4,"count":151,"rate":10.8,"date":"2002-04-01T08:00:00.000Z"},{"series":"Agriculture","year":2002,"month":5,"count":89,"rate":6.8,"date":"2002-05-01T07:00:00.000Z"},{"series":"Agriculture","year":2002,"month":6,"count":89,"rate":6.3,"date":"2002-06-01T07:00:00.000Z"},{"series":"Agriculture","year":2002,"month":7,"count":114,"rate":7.3,"date":"2002-07-01T07:00:00.000Z"},{"series":"Agriculture","year":2002,"month":8,"count":125,"rate":9,"date":"2002-08-01T07:00:00.000Z"},{"series":"Agriculture","year":2002,"month":9,"count":92,"rate":6.3,"date":"2002-09-01T07:00:00.000Z"},{"series":"Agriculture","year":2002,"month":10,"count":97,"rate":6.6,"date":"2002-10-01T07:00:00.000Z"},{"series":"Agriculture","year":2002,"month":11,"count":137,"rate":11.1,"date":"2002-11-01T08:00:00.000Z"},{"series":"Agriculture","year":2002,"month":12,"count":120,"rate":9.8,"date":"2002-12-01T08:00:00.000Z"},{"series":"Agriculture","year":2003,"month":1,"count":159,"rate":13.2,"date":"2003-01-01T08:00:00.000Z"},{"series":"Agriculture","year":2003,"month":2,"count":172,"rate":14.7,"date":"2003-02-01T08:00:00.000Z"},{"series":"Agriculture","year":2003,"month":3,"count":161,"rate":12.9,"date":"2003-03-01T08:00:00.000Z"},{"series":"Agriculture","year":2003,"month":4,"count":154,"rate":12,"date":"2003-04-01T08:00:00.000Z"},{"series":"Agriculture","year":2003,"month":5,"count":133,"rate":10.2,"date":"2003-05-01T07:00:00.000Z"},{"series":"Agriculture","year":2003,"month":6,"count":94,"rate":6.9,"date":"2003-06-01T07:00:00.000Z"},{"series":"Agriculture","year":2003,"month":7,"count":113,"rate":8.2,"date":"2003-07-01T07:00:00.000Z"},{"series":"Agriculture","year":2003,"month":8,"count":173,"rate":10.7,"date":"2003-08-01T07:00:00.000Z"},{"series":"Agriculture","year":2003,"month":9,"count":98,"rate":6.2,"date":"2003-09-01T07:00:00.000Z"},{"series":"Agriculture","year":2003,"month":10,"count":136,"rate":8.5,"date":"2003-10-01T07:00:00.000Z"},{"series":"Agriculture","year":2003,"month":11,"count":148,"rate":10.3,"date":"2003-11-01T08:00:00.000Z"},{"series":"Agriculture","year":2003,"month":12,"count":137,"rate":10.9,"date":"2003-12-01T08:00:00.000Z"},{"series":"Agriculture","year":2004,"month":1,"count":184,"rate":15.1,"date":"2004-01-01T08:00:00.000Z"},{"series":"Agriculture","year":2004,"month":2,"count":168,"rate":14.2,"date":"2004-02-01T08:00:00.000Z"},{"series":"Agriculture","year":2004,"month":3,"count":153,"rate":12.7,"date":"2004-03-01T08:00:00.000Z"},{"series":"Agriculture","year":2004,"month":4,"count":107,"rate":8.3,"date":"2004-04-01T08:00:00.000Z"},{"series":"Agriculture","year":2004,"month":5,"count":99,"rate":7.4,"date":"2004-05-01T07:00:00.000Z"},{"series":"Agriculture","year":2004,"month":6,"count":106,"rate":7.6,"date":"2004-06-01T07:00:00.000Z"},{"series":"Agriculture","year":2004,"month":7,"count":140,"rate":10,"date":"2004-07-01T07:00:00.000Z"},{"series":"Agriculture","year":2004,"month":8,"count":103,"rate":7,"date":"2004-08-01T07:00:00.000Z"},{"series":"Agriculture","year":2004,"month":9,"count":88,"rate":6.4,"date":"2004-09-01T07:00:00.000Z"},{"series":"Agriculture","year":2004,"month":10,"count":102,"rate":7.7,"date":"2004-10-01T07:00:00.000Z"},{"series":"Agriculture","year":2004,"month":11,"count":131,"rate":10.5,"date":"2004-11-01T08:00:00.000Z"},{"series":"Agriculture","year":2004,"month":12,"count":165,"rate":14,"date":"2004-12-01T08:00:00.000Z"},{"series":"Agriculture","year":2005,"month":1,"count":153,"rate":13.2,"date":"2005-01-01T08:00:00.000Z"},{"series":"Agriculture","year":2005,"month":2,"count":107,"rate":9.9,"date":"2005-02-01T08:00:00.000Z"},{"series":"Agriculture","year":2005,"month":3,"count":139,"rate":11.8,"date":"2005-03-01T08:00:00.000Z"},{"series":"Agriculture","year":2005,"month":4,"count":84,"rate":6.9,"date":"2005-04-01T08:00:00.000Z"},{"series":"Agriculture","year":2005,"month":5,"count":66,"rate":5.3,"date":"2005-05-01T07:00:00.000Z"},{"series":"Agriculture","year":2005,"month":6,"count":76,"rate":5.2,"date":"2005-06-01T07:00:00.000Z"},{"series":"Agriculture","year":2005,"month":7,"count":69,"rate":4.7,"date":"2005-07-01T07:00:00.000Z"},{"series":"Agriculture","year":2005,"month":8,"count":100,"rate":7.1,"date":"2005-08-01T07:00:00.000Z"},{"series":"Agriculture","year":2005,"month":9,"count":127,"rate":9.5,"date":"2005-09-01T07:00:00.000Z"},{"series":"Agriculture","year":2005,"month":10,"count":85,"rate":6.7,"date":"2005-10-01T07:00:00.000Z"},{"series":"Agriculture","year":2005,"month":11,"count":118,"rate":9.6,"date":"2005-11-01T08:00:00.000Z"},{"series":"Agriculture","year":2005,"month":12,"count":127,"rate":11.1,"date":"2005-12-01T08:00:00.000Z"},{"series":"Agriculture","year":2006,"month":1,"count":140,"rate":11.5,"date":"2006-01-01T08:00:00.000Z"},{"series":"Agriculture","year":2006,"month":2,"count":139,"rate":11.8,"date":"2006-02-01T08:00:00.000Z"},{"series":"Agriculture","year":2006,"month":3,"count":117,"rate":9.8,"date":"2006-03-01T08:00:00.000Z"},{"series":"Agriculture","year":2006,"month":4,"count":81,"rate":6.2,"date":"2006-04-01T08:00:00.000Z"},{"series":"Agriculture","year":2006,"month":5,"count":79,"rate":6,"date":"2006-05-01T07:00:00.000Z"},{"series":"Agriculture","year":2006,"month":6,"count":35,"rate":2.4,"date":"2006-06-01T07:00:00.000Z"},{"series":"Agriculture","year":2006,"month":7,"count":55,"rate":3.6,"date":"2006-07-01T07:00:00.000Z"},{"series":"Agriculture","year":2006,"month":8,"count":76,"rate":5.3,"date":"2006-08-01T07:00:00.000Z"},{"series":"Agriculture","year":2006,"month":9,"count":78,"rate":5.9,"date":"2006-09-01T07:00:00.000Z"},{"series":"Agriculture","year":2006,"month":10,"count":77,"rate":5.8,"date":"2006-10-01T07:00:00.000Z"},{"series":"Agriculture","year":2006,"month":11,"count":125,"rate":9.6,"date":"2006-11-01T08:00:00.000Z"},{"series":"Agriculture","year":2006,"month":12,"count":139,"rate":10.4,"date":"2006-12-01T08:00:00.000Z"},{"series":"Agriculture","year":2007,"month":1,"count":128,"rate":10,"date":"2007-01-01T08:00:00.000Z"},{"series":"Agriculture","year":2007,"month":2,"count":127,"rate":9.6,"date":"2007-02-01T08:00:00.000Z"},{"series":"Agriculture","year":2007,"month":3,"count":123,"rate":9.7,"date":"2007-03-01T08:00:00.000Z"},{"series":"Agriculture","year":2007,"month":4,"count":67,"rate":5.7,"date":"2007-04-01T07:00:00.000Z"},{"series":"Agriculture","year":2007,"month":5,"count":64,"rate":5.1,"date":"2007-05-01T07:00:00.000Z"},{"series":"Agriculture","year":2007,"month":6,"count":59,"rate":4.5,"date":"2007-06-01T07:00:00.000Z"},{"series":"Agriculture","year":2007,"month":7,"count":40,"rate":3.1,"date":"2007-07-01T07:00:00.000Z"},{"series":"Agriculture","year":2007,"month":8,"count":54,"rate":4.7,"date":"2007-08-01T07:00:00.000Z"},{"series":"Agriculture","year":2007,"month":9,"count":53,"rate":4.3,"date":"2007-09-01T07:00:00.000Z"},{"series":"Agriculture","year":2007,"month":10,"count":47,"rate":4,"date":"2007-10-01T07:00:00.000Z"},{"series":"Agriculture","year":2007,"month":11,"count":80,"rate":6.6,"date":"2007-11-01T07:00:00.000Z"},{"series":"Agriculture","year":2007,"month":12,"count":96,"rate":7.5,"date":"2007-12-01T08:00:00.000Z"},{"series":"Agriculture","year":2008,"month":1,"count":113,"rate":9.5,"date":"2008-01-01T08:00:00.000Z"},{"series":"Agriculture","year":2008,"month":2,"count":135,"rate":10.9,"date":"2008-02-01T08:00:00.000Z"},{"series":"Agriculture","year":2008,"month":3,"count":175,"rate":13.2,"date":"2008-03-01T08:00:00.000Z"},{"series":"Agriculture","year":2008,"month":4,"count":108,"rate":8.6,"date":"2008-04-01T07:00:00.000Z"},{"series":"Agriculture","year":2008,"month":5,"count":94,"rate":7.4,"date":"2008-05-01T07:00:00.000Z"},{"series":"Agriculture","year":2008,"month":6,"count":86,"rate":6.1,"date":"2008-06-01T07:00:00.000Z"},{"series":"Agriculture","year":2008,"month":7,"count":125,"rate":8.5,"date":"2008-07-01T07:00:00.000Z"},{"series":"Agriculture","year":2008,"month":8,"count":111,"rate":7.6,"date":"2008-08-01T07:00:00.000Z"},{"series":"Agriculture","year":2008,"month":9,"count":84,"rate":5.8,"date":"2008-09-01T07:00:00.000Z"},{"series":"Agriculture","year":2008,"month":10,"count":97,"rate":7.1,"date":"2008-10-01T07:00:00.000Z"},{"series":"Agriculture","year":2008,"month":11,"count":119,"rate":9.5,"date":"2008-11-01T07:00:00.000Z"},{"series":"Agriculture","year":2008,"month":12,"count":229,"rate":17,"date":"2008-12-01T08:00:00.000Z"},{"series":"Agriculture","year":2009,"month":1,"count":245,"rate":18.7,"date":"2009-01-01T08:00:00.000Z"},{"series":"Agriculture","year":2009,"month":2,"count":251,"rate":18.8,"date":"2009-02-01T08:00:00.000Z"},{"series":"Agriculture","year":2009,"month":3,"count":241,"rate":19,"date":"2009-03-01T08:00:00.000Z"},{"series":"Agriculture","year":2009,"month":4,"count":176,"rate":13.5,"date":"2009-04-01T07:00:00.000Z"},{"series":"Agriculture","year":2009,"month":5,"count":136,"rate":10,"date":"2009-05-01T07:00:00.000Z"},{"series":"Agriculture","year":2009,"month":6,"count":182,"rate":12.3,"date":"2009-06-01T07:00:00.000Z"},{"series":"Agriculture","year":2009,"month":7,"count":180,"rate":12.1,"date":"2009-07-01T07:00:00.000Z"},{"series":"Agriculture","year":2009,"month":8,"count":195,"rate":13.1,"date":"2009-08-01T07:00:00.000Z"},{"series":"Agriculture","year":2009,"month":9,"count":150,"rate":11.1,"date":"2009-09-01T07:00:00.000Z"},{"series":"Agriculture","year":2009,"month":10,"count":166,"rate":11.8,"date":"2009-10-01T07:00:00.000Z"},{"series":"Agriculture","year":2009,"month":11,"count":180,"rate":12.6,"date":"2009-11-01T07:00:00.000Z"},{"series":"Agriculture","year":2009,"month":12,"count":292,"rate":19.7,"date":"2009-12-01T08:00:00.000Z"},{"series":"Agriculture","year":2010,"month":1,"count":318,"rate":21.3,"date":"2010-01-01T08:00:00.000Z"},{"series":"Agriculture","year":2010,"month":2,"count":285,"rate":18.8,"date":"2010-02-01T08:00:00.000Z"},{"series":"Self-employed","year":2000,"month":1,"count":239,"rate":2.3,"date":"2000-01-01T08:00:00.000Z"},{"series":"Self-employed","year":2000,"month":2,"count":262,"rate":2.5,"date":"2000-02-01T08:00:00.000Z"},{"series":"Self-employed","year":2000,"month":3,"count":213,"rate":2,"date":"2000-03-01T08:00:00.000Z"},{"series":"Self-employed","year":2000,"month":4,"count":218,"rate":2,"date":"2000-04-01T08:00:00.000Z"},{"series":"Self-employed","year":2000,"month":5,"count":206,"rate":1.9,"date":"2000-05-01T07:00:00.000Z"},{"series":"Self-employed","year":2000,"month":6,"count":188,"rate":1.8,"date":"2000-06-01T07:00:00.000Z"},{"series":"Self-employed","year":2000,"month":7,"count":222,"rate":2.1,"date":"2000-07-01T07:00:00.000Z"},{"series":"Self-employed","year":2000,"month":8,"count":186,"rate":1.7,"date":"2000-08-01T07:00:00.000Z"},{"series":"Self-employed","year":2000,"month":9,"count":213,"rate":2,"date":"2000-09-01T07:00:00.000Z"},{"series":"Self-employed","year":2000,"month":10,"count":226,"rate":2.2,"date":"2000-10-01T07:00:00.000Z"},{"series":"Self-employed","year":2000,"month":11,"count":273,"rate":2.7,"date":"2000-11-01T08:00:00.000Z"},{"series":"Self-employed","year":2000,"month":12,"count":178,"rate":1.8,"date":"2000-12-01T08:00:00.000Z"},{"series":"Self-employed","year":2001,"month":1,"count":194,"rate":1.9,"date":"2001-01-01T08:00:00.000Z"},{"series":"Self-employed","year":2001,"month":2,"count":209,"rate":2,"date":"2001-02-01T08:00:00.000Z"},{"series":"Self-employed","year":2001,"month":3,"count":181,"rate":1.7,"date":"2001-03-01T08:00:00.000Z"},{"series":"Self-employed","year":2001,"month":4,"count":216,"rate":2.1,"date":"2001-04-01T08:00:00.000Z"},{"series":"Self-employed","year":2001,"month":5,"count":206,"rate":2,"date":"2001-05-01T07:00:00.000Z"},{"series":"Self-employed","year":2001,"month":6,"count":187,"rate":1.7,"date":"2001-06-01T07:00:00.000Z"},{"series":"Self-employed","year":2001,"month":7,"count":191,"rate":1.8,"date":"2001-07-01T07:00:00.000Z"},{"series":"Self-employed","year":2001,"month":8,"count":243,"rate":2.3,"date":"2001-08-01T07:00:00.000Z"},{"series":"Self-employed","year":2001,"month":9,"count":256,"rate":2.4,"date":"2001-09-01T07:00:00.000Z"},{"series":"Self-employed","year":2001,"month":10,"count":247,"rate":2.3,"date":"2001-10-01T07:00:00.000Z"},{"series":"Self-employed","year":2001,"month":11,"count":234,"rate":2.3,"date":"2001-11-01T08:00:00.000Z"},{"series":"Self-employed","year":2001,"month":12,"count":249,"rate":2.5,"date":"2001-12-01T08:00:00.000Z"},{"series":"Self-employed","year":2002,"month":1,"count":263,"rate":2.7,"date":"2002-01-01T08:00:00.000Z"},{"series":"Self-employed","year":2002,"month":2,"count":250,"rate":2.6,"date":"2002-02-01T08:00:00.000Z"},{"series":"Self-employed","year":2002,"month":3,"count":217,"rate":2.2,"date":"2002-03-01T08:00:00.000Z"},{"series":"Self-employed","year":2002,"month":4,"count":255,"rate":2.5,"date":"2002-04-01T08:00:00.000Z"},{"series":"Self-employed","year":2002,"month":5,"count":264,"rate":2.6,"date":"2002-05-01T07:00:00.000Z"},{"series":"Self-employed","year":2002,"month":6,"count":246,"rate":2.4,"date":"2002-06-01T07:00:00.000Z"},{"series":"Self-employed","year":2002,"month":7,"count":249,"rate":2.4,"date":"2002-07-01T07:00:00.000Z"},{"series":"Self-employed","year":2002,"month":8,"count":271,"rate":2.6,"date":"2002-08-01T07:00:00.000Z"},{"series":"Self-employed","year":2002,"month":9,"count":266,"rate":2.5,"date":"2002-09-01T07:00:00.000Z"},{"series":"Self-employed","year":2002,"month":10,"count":275,"rate":2.6,"date":"2002-10-01T07:00:00.000Z"},{"series":"Self-employed","year":2002,"month":11,"count":297,"rate":2.8,"date":"2002-11-01T08:00:00.000Z"},{"series":"Self-employed","year":2002,"month":12,"count":327,"rate":3.1,"date":"2002-12-01T08:00:00.000Z"},{"series":"Self-employed","year":2003,"month":1,"count":324,"rate":3,"date":"2003-01-01T08:00:00.000Z"},{"series":"Self-employed","year":2003,"month":2,"count":304,"rate":3,"date":"2003-02-01T08:00:00.000Z"},{"series":"Self-employed","year":2003,"month":3,"count":279,"rate":2.7,"date":"2003-03-01T08:00:00.000Z"},{"series":"Self-employed","year":2003,"month":4,"count":248,"rate":2.4,"date":"2003-04-01T08:00:00.000Z"},{"series":"Self-employed","year":2003,"month":5,"count":271,"rate":2.6,"date":"2003-05-01T07:00:00.000Z"},{"series":"Self-employed","year":2003,"month":6,"count":295,"rate":2.7,"date":"2003-06-01T07:00:00.000Z"},{"series":"Self-employed","year":2003,"month":7,"count":270,"rate":2.5,"date":"2003-07-01T07:00:00.000Z"},{"series":"Self-employed","year":2003,"month":8,"count":302,"rate":2.7,"date":"2003-08-01T07:00:00.000Z"},{"series":"Self-employed","year":2003,"month":9,"count":287,"rate":2.6,"date":"2003-09-01T07:00:00.000Z"},{"series":"Self-employed","year":2003,"month":10,"count":338,"rate":3.1,"date":"2003-10-01T07:00:00.000Z"},{"series":"Self-employed","year":2003,"month":11,"count":308,"rate":2.8,"date":"2003-11-01T08:00:00.000Z"},{"series":"Self-employed","year":2003,"month":12,"count":299,"rate":2.8,"date":"2003-12-01T08:00:00.000Z"},{"series":"Self-employed","year":2004,"month":1,"count":302,"rate":2.8,"date":"2004-01-01T08:00:00.000Z"},{"series":"Self-employed","year":2004,"month":2,"count":260,"rate":2.5,"date":"2004-02-01T08:00:00.000Z"},{"series":"Self-employed","year":2004,"month":3,"count":260,"rate":2.5,"date":"2004-03-01T08:00:00.000Z"},{"series":"Self-employed","year":2004,"month":4,"count":242,"rate":2.3,"date":"2004-04-01T08:00:00.000Z"},{"series":"Self-employed","year":2004,"month":5,"count":287,"rate":2.7,"date":"2004-05-01T07:00:00.000Z"},{"series":"Self-employed","year":2004,"month":6,"count":306,"rate":2.8,"date":"2004-06-01T07:00:00.000Z"},{"series":"Self-employed","year":2004,"month":7,"count":291,"rate":2.6,"date":"2004-07-01T07:00:00.000Z"},{"series":"Self-employed","year":2004,"month":8,"count":324,"rate":2.9,"date":"2004-08-01T07:00:00.000Z"},{"series":"Self-employed","year":2004,"month":9,"count":362,"rate":3.3,"date":"2004-09-01T07:00:00.000Z"},{"series":"Self-employed","year":2004,"month":10,"count":301,"rate":2.7,"date":"2004-10-01T07:00:00.000Z"},{"series":"Self-employed","year":2004,"month":11,"count":353,"rate":3.2,"date":"2004-11-01T08:00:00.000Z"},{"series":"Self-employed","year":2004,"month":12,"count":341,"rate":3.2,"date":"2004-12-01T08:00:00.000Z"},{"series":"Self-employed","year":2005,"month":1,"count":346,"rate":3.2,"date":"2005-01-01T08:00:00.000Z"},{"series":"Self-employed","year":2005,"month":2,"count":363,"rate":3.4,"date":"2005-02-01T08:00:00.000Z"},{"series":"Self-employed","year":2005,"month":3,"count":312,"rate":2.9,"date":"2005-03-01T08:00:00.000Z"},{"series":"Self-employed","year":2005,"month":4,"count":273,"rate":2.4,"date":"2005-04-01T08:00:00.000Z"},{"series":"Self-employed","year":2005,"month":5,"count":299,"rate":2.7,"date":"2005-05-01T07:00:00.000Z"},{"series":"Self-employed","year":2005,"month":6,"count":268,"rate":2.4,"date":"2005-06-01T07:00:00.000Z"},{"series":"Self-employed","year":2005,"month":7,"count":282,"rate":2.5,"date":"2005-07-01T07:00:00.000Z"},{"series":"Self-employed","year":2005,"month":8,"count":249,"rate":2.3,"date":"2005-08-01T07:00:00.000Z"},{"series":"Self-employed","year":2005,"month":9,"count":282,"rate":2.6,"date":"2005-09-01T07:00:00.000Z"},{"series":"Self-employed","year":2005,"month":10,"count":255,"rate":2.3,"date":"2005-10-01T07:00:00.000Z"},{"series":"Self-employed","year":2005,"month":11,"count":319,"rate":3,"date":"2005-11-01T08:00:00.000Z"},{"series":"Self-employed","year":2005,"month":12,"count":327,"rate":3.1,"date":"2005-12-01T08:00:00.000Z"},{"series":"Self-employed","year":2006,"month":1,"count":341,"rate":3.2,"date":"2006-01-01T08:00:00.000Z"},{"series":"Self-employed","year":2006,"month":2,"count":332,"rate":3.1,"date":"2006-02-01T08:00:00.000Z"},{"series":"Self-employed","year":2006,"month":3,"count":300,"rate":2.8,"date":"2006-03-01T08:00:00.000Z"},{"series":"Self-employed","year":2006,"month":4,"count":334,"rate":3.1,"date":"2006-04-01T08:00:00.000Z"},{"series":"Self-employed","year":2006,"month":5,"count":251,"rate":2.3,"date":"2006-05-01T07:00:00.000Z"},{"series":"Self-employed","year":2006,"month":6,"count":245,"rate":2.2,"date":"2006-06-01T07:00:00.000Z"},{"series":"Self-employed","year":2006,"month":7,"count":291,"rate":2.6,"date":"2006-07-01T07:00:00.000Z"},{"series":"Self-employed","year":2006,"month":8,"count":306,"rate":2.7,"date":"2006-08-01T07:00:00.000Z"},{"series":"Self-employed","year":2006,"month":9,"count":299,"rate":2.7,"date":"2006-09-01T07:00:00.000Z"},{"series":"Self-employed","year":2006,"month":10,"count":275,"rate":2.5,"date":"2006-10-01T07:00:00.000Z"},{"series":"Self-employed","year":2006,"month":11,"count":257,"rate":2.3,"date":"2006-11-01T08:00:00.000Z"},{"series":"Self-employed","year":2006,"month":12,"count":287,"rate":2.6,"date":"2006-12-01T08:00:00.000Z"},{"series":"Self-employed","year":2007,"month":1,"count":376,"rate":3.5,"date":"2007-01-01T08:00:00.000Z"},{"series":"Self-employed","year":2007,"month":2,"count":300,"rate":2.8,"date":"2007-02-01T08:00:00.000Z"},{"series":"Self-employed","year":2007,"month":3,"count":311,"rate":2.8,"date":"2007-03-01T08:00:00.000Z"},{"series":"Self-employed","year":2007,"month":4,"count":240,"rate":2.2,"date":"2007-04-01T07:00:00.000Z"},{"series":"Self-employed","year":2007,"month":5,"count":276,"rate":2.5,"date":"2007-05-01T07:00:00.000Z"},{"series":"Self-employed","year":2007,"month":6,"count":258,"rate":2.3,"date":"2007-06-01T07:00:00.000Z"},{"series":"Self-employed","year":2007,"month":7,"count":324,"rate":2.9,"date":"2007-07-01T07:00:00.000Z"},{"series":"Self-employed","year":2007,"month":8,"count":315,"rate":2.9,"date":"2007-08-01T07:00:00.000Z"},{"series":"Self-employed","year":2007,"month":9,"count":304,"rate":2.8,"date":"2007-09-01T07:00:00.000Z"},{"series":"Self-employed","year":2007,"month":10,"count":338,"rate":3.1,"date":"2007-10-01T07:00:00.000Z"},{"series":"Self-employed","year":2007,"month":11,"count":336,"rate":3.2,"date":"2007-11-01T07:00:00.000Z"},{"series":"Self-employed","year":2007,"month":12,"count":326,"rate":3.2,"date":"2007-12-01T08:00:00.000Z"},{"series":"Self-employed","year":2008,"month":1,"count":338,"rate":3.3,"date":"2008-01-01T08:00:00.000Z"},{"series":"Self-employed","year":2008,"month":2,"count":340,"rate":3.2,"date":"2008-02-01T08:00:00.000Z"},{"series":"Self-employed","year":2008,"month":3,"count":346,"rate":3.3,"date":"2008-03-01T08:00:00.000Z"},{"series":"Self-employed","year":2008,"month":4,"count":338,"rate":3.2,"date":"2008-04-01T07:00:00.000Z"},{"series":"Self-employed","year":2008,"month":5,"count":366,"rate":3.4,"date":"2008-05-01T07:00:00.000Z"},{"series":"Self-employed","year":2008,"month":6,"count":364,"rate":3.3,"date":"2008-06-01T07:00:00.000Z"},{"series":"Self-employed","year":2008,"month":7,"count":345,"rate":3.1,"date":"2008-07-01T07:00:00.000Z"},{"series":"Self-employed","year":2008,"month":8,"count":378,"rate":3.5,"date":"2008-08-01T07:00:00.000Z"},{"series":"Self-employed","year":2008,"month":9,"count":414,"rate":3.9,"date":"2008-09-01T07:00:00.000Z"},{"series":"Self-employed","year":2008,"month":10,"count":396,"rate":3.9,"date":"2008-10-01T07:00:00.000Z"},{"series":"Self-employed","year":2008,"month":11,"count":411,"rate":4.1,"date":"2008-11-01T07:00:00.000Z"},{"series":"Self-employed","year":2008,"month":12,"count":559,"rate":5.5,"date":"2008-12-01T08:00:00.000Z"},{"series":"Self-employed","year":2009,"month":1,"count":659,"rate":6.5,"date":"2009-01-01T08:00:00.000Z"},{"series":"Self-employed","year":2009,"month":2,"count":586,"rate":5.7,"date":"2009-02-01T08:00:00.000Z"},{"series":"Self-employed","year":2009,"month":3,"count":625,"rate":5.9,"date":"2009-03-01T08:00:00.000Z"},{"series":"Self-employed","year":2009,"month":4,"count":488,"rate":4.6,"date":"2009-04-01T07:00:00.000Z"},{"series":"Self-employed","year":2009,"month":5,"count":530,"rate":5,"date":"2009-05-01T07:00:00.000Z"},{"series":"Self-employed","year":2009,"month":6,"count":472,"rate":4.4,"date":"2009-06-01T07:00:00.000Z"},{"series":"Self-employed","year":2009,"month":7,"count":552,"rate":5.2,"date":"2009-07-01T07:00:00.000Z"},{"series":"Self-employed","year":2009,"month":8,"count":569,"rate":5.3,"date":"2009-08-01T07:00:00.000Z"},{"series":"Self-employed","year":2009,"month":9,"count":636,"rate":5.9,"date":"2009-09-01T07:00:00.000Z"},{"series":"Self-employed","year":2009,"month":10,"count":610,"rate":5.9,"date":"2009-10-01T07:00:00.000Z"},{"series":"Self-employed","year":2009,"month":11,"count":592,"rate":5.7,"date":"2009-11-01T07:00:00.000Z"},{"series":"Self-employed","year":2009,"month":12,"count":609,"rate":5.9,"date":"2009-12-01T08:00:00.000Z"},{"series":"Self-employed","year":2010,"month":1,"count":730,"rate":7.2,"date":"2010-01-01T08:00:00.000Z"},{"series":"Self-employed","year":2010,"month":2,"count":680,"rate":6.5,"date":"2010-02-01T08:00:00.000Z"}]
  },
  "mark": "area",
  "encoding": {
    "x": {
      "timeUnit": "yearmonth", "field": "date",
      "axis": {"format": "%Y"}
    },
    "y": {
      "aggregate": "sum", "field": "count"
    },
    "color": {
      "field": "series",
      "scale": {"scheme": "category20b"}
    }
  }
}
```

Footer
