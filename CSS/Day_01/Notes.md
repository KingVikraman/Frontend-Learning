# 📘 CSS Day 01 — Introduction to CSS

## What is CSS?

CSS stands for **Cascading Style Sheets**.

CSS is responsible for controlling the appearance and presentation of HTML elements.

### Responsibilities

| Technology | Responsibility           |
| ---------- | ------------------------ |
| HTML       | Structure and meaning    |
| CSS        | Appearance and styling   |
| JavaScript | Behavior and interaction |

---

## The Relationship Between HTML and CSS

HTML creates the structure of a webpage.

Example:

```html
<h1>Hello World</h1>
```

HTML tells the browser:

> "This is a heading."

However, HTML does not decide:

* Text color
* Font size
* Layout
* Spacing

Those responsibilities belong to CSS.

---

## Connecting CSS to HTML

A CSS file is not automatically applied simply because it exists.

The HTML document must explicitly connect to it.

Example:

```html
<link rel="stylesheet" href="style.css">
```

This tells the browser:

> "Load and apply the styling rules from style.css."

---

## File Path Thinking

Project Structure:

```text
Day_05/
│
├── index.html
└── style.css
```

Correct:

```html
<link rel="stylesheet" href="style.css">
```

If the CSS file is inside a folder:

```text
Day_05/
│
├── index.html
└── css/
    └── style.css
```

Then:

```html
<link rel="stylesheet" href="css/style.css">
```

The browser does not search for files automatically.

It only follows the exact path provided.

---

## CSS Rule Structure

Example:

```css
h1 {
    color: blue;
}
```

A CSS rule has two parts:

### Selector

```css
h1
```

The selector determines which HTML elements will receive the styling.

### Declaration

```css
color: blue;
```

The declaration specifies what styling should be applied.

---

## Important Mental Model

CSS works in two steps:

```text
1. Select elements
2. Apply styling rules
```

Example:

```css
p {
    color: red;
}
```

Process:

1. Find all `<p>` elements.
2. Apply the color red to each matching element.

---

## CSS Does NOT Modify HTML

Incorrect:

> CSS changes the HTML file.

Correct:

> CSS changes how HTML elements are displayed in the browser.

The HTML source remains unchanged.

---

## Browser Rendering Pipeline

```text
HTML → DOM Creation
CSS → Style Matching
Browser → Render Page
```

Process:

1. Browser reads HTML.
2. Browser creates DOM elements.
3. Browser reads CSS rules.
4. Browser matches selectors to elements.
5. Browser renders the styled result.

---

## Key Takeaways

* HTML creates structure.
* CSS controls appearance.
* CSS does not create content.
* CSS does not modify HTML files.
* CSS selects elements first, then applies styling rules.
* Browsers render HTML even without CSS.
* Without HTML, CSS has nothing to style.

---

## One-Line Summary

HTML creates structure. CSS decorates structure. The browser displays the final result.
