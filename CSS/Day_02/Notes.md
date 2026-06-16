# 📘 CSS Day 02 — Selectors

## 🎯 Objective

Today I learned how CSS knows **which HTML elements to style**.

The browser does not randomly apply styles.

It follows a process.

---

# 🧠 Browser Pipeline

The browser works in this order:

```text
HTML
 ↓
Browser creates DOM
 ↓
CSS selectors search the DOM
 ↓
CSS rules are applied
 ↓
Browser renders the final page
```

Important:

CSS does NOT modify the HTML file.

CSS only changes the appearance of elements that already exist.

---

# 🏷️ CSS Rule Structure

Example:

```css
h1 {
    color: blue;
}
```

A CSS rule has two parts.

## Selector

```css
h1
```

Question:

> Which elements should be targeted?

---

## Declaration

```css
color: blue;
```

Question:

> What styling should be applied?

---

# 🧠 CSS Mental Model

CSS always works in two steps:

```text
1. Find matching elements
2. Apply styling rules
```

Never think:

> CSS magically changes things.

Instead think:

> CSS searches and applies rules.

---

# 🔹 Element Selector

Example:

```css
h1 {
    color: blue;
}
```

This means:

> Find every `<h1>` element.

Then apply:

```css
color: blue;
```

Example:

```html
<h1>Home</h1>

<h1>About</h1>

<h1>Contact</h1>
```

All three become blue.

---

# 🔹 Class Selector

HTML:

```html
<p class="important">
    Hello
</p>
```

CSS:

```css
.important {
    color: red;
}
```

The `.` means:

> Find all elements with `class="important"`.

Classes can be reused.

Multiple elements can belong to the same class.

---

# 🔹 ID Selector

HTML:

```html
<h1 id="main-title">
    Raja Vikraman
</h1>
```

CSS:

```css
#main-title {
    color: blue;
}
```

The `#` means:

> Find the element with `id="main-title"`.

IDs should be unique.

Only one element should have that ID.

---

# 🔹 Multiple Classes

An element can belong to multiple classes.

Example:

```html
<p class="important warning">
    Battery Low
</p>
```

CSS:

```css
.important {
    font-weight: bold;
}

.warning {
    color: red;
}
```

Result:

```text
Battery Low

✓ Bold
✓ Red
```

Because the element belongs to both classes.

---

# 🧠 CSS Does NOT Work Like This

❌ Wrong:

> CSS changes the HTML file.

❌ Wrong:

> CSS goes through text.

❌ Wrong:

> CSS only works from top to bottom.

---

# 🧠 Correct Mental Model

The browser evaluates every CSS rule independently.

For each rule it asks:

> Which elements match this selector?

Then:

> Apply the styling.

---

# 🧠 Important Distinction

HTML creates structure.

CSS controls appearance.

Browser renders the result.

```text
HTML creates.

CSS styles.

Browser displays.
```

---

# 🧠 One Sentence To Memorize

CSS does not create content.

CSS selects existing elements and applies visual rules to them.

---

# 🏆 Day 02 Key Takeaways

✅ Learned Element Selectors

✅ Learned Class Selectors

✅ Learned ID Selectors

✅ Learned Multiple Classes

✅ Learned Browser → DOM → CSS → Render flow

✅ Learned that CSS does not modify HTML

✅ Learned CSS always works using:

1. Find matching elements
2. Apply rules
