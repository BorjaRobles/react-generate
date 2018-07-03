# Cypress generate

To keep the consistency in Cypress projects, use this library to auto-generate code, this will speed up our performance as developers and also keep the code efficient and intuitive.


## What we use?

We are using the following libraries in our Cypress project. If your project uses these libraries then `cypress-generate` is for you.

* [immutable](https://github.com/facebook/immutable-js/) (v3.8.1+)

## Getting Started

Install `cypress-generate` using `npm`:

```
npm install --save-dev cypress-generate
```


Let's get started by configuring your `package.json`, you have to add a script to your `package.json` so we can use it after.In this case, we will add the `generate` script


```
// package.json
{
  "scripts": {
    "generate": "cypressgen" // cypressgen is the binary that this library uses!
  }
}
```


Now we need some parameters to make this library work:

* **specPath** *(required)*: the path to the main source.
* **testFileExtension** *(optional)*: The sub-extension for the test files that we are going to generate.


To set these parameters you need to use the `package.json`, add the `cypressGenerate` object to set the parameters:

```
// package.json
{
  "cypressGenerate": {
    "specPath": "./integration",
    "testFileExtension": "spec"
  }
}
```


Finally, your can run the generator:

```
npm run generate -- [options]
```

Below, we have an example of the `[options]` you can pass to the `cypressgen` command

```
  Options:

    -s, --spec        Generates a new spec
    -p, --pageobject  Generates a new pageobject
    -h, --help        Output usage information
```
