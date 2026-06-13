# 📘 Day 2 — HTML Images & File Paths

## 🖼️ The `<img>` Tag

### Basic Form

```html id="img01"
<img src="image.jpg" alt="description">
```

---

## 🔍 Breakdown

### 1. `src` (Source)

```text id="src01"
src = where the image comes from
```

Example:

```html id="img02"
<img src="cat.jpg">
```

Meaning:

> “Browser, find and load `cat.jpg` from the current location.”

---

### ⚠️ Important Correction

It does NOT mean:

> “search anywhere on the computer”

It means:

> “search relative to the HTML file location”

---

### 2. `alt` (Alternative Text)

```text id="alt01"
alt = text shown if image fails to load
```

Example:

```html id="img03"
<img src="cat.jpg" alt="A black cat sitting on a table">
```

### Why it matters:

* Displays if image fails
* Used by screen readers (accessibility)
* Helps search engines understand content

👉 This is NOT optional decoration. It is **meaning fallback**.

---

# 📁 File Path Thinking (CRITICAL CONCEPT)

## Example project structure:

```text id="fp01"
day02/
│
├── index.html
└── drone.jpg
```

---

## Correct usage:

```html id="img04"
<img src="drone.jpg" alt="My FPV drone">
```

---

## ❌ Common mistake:

```html id="img05"
<img src="images/drone.jpg">
```

This fails unless:

* there is actually an `images` folder
* and the file exists inside it

---

## 🧭 What `src` really means

It is a **relative path**, not a global search.

So:

```text id="path01"
src="drone.jpg"
```

means:

> “Look in the same folder as index.html”

---

# 🧠 Mental Model (IMPORTANT)

Think of it like:

| Concept | Meaning                       |
| ------- | ----------------------------- |
| HTML    | Instructions                  |
| Browser | Worker executing instructions |
| Folder  | Workspace                     |
| File    | Object inside workspace       |

So:

> You are giving directions inside a controlled file system.

---

# 📏 Image Size Control (NEW IMPORTANT CONCEPT)

HTML can control display size:

```html id="img06"
<img src="photo.png" width="500">
```

or:

```html id="img07"
<img src="photo.png" height="300">
```

or both:

```html id="img08"
<img src="photo.png" width="500" height="300">
```

---

## ⚠️ Important Warning

If you set BOTH width and height:

* image may stretch
* aspect ratio may break

Better beginner practice:

* control only width OR height

---

# 🧠 Key Learning for Day 2

HTML does NOT:

* edit images
* resize files
* move files

HTML only:

> tells browser where to find them and how to display them

---

# 🚨 Debugging Checklist (VERY IMPORTANT)

If image does NOT show:

1. Is filename correct? (`photo.png` vs `photo.png.png`)
2. Is file in same folder?
3. Is path correct?
4. Is extension correct? (.png vs .jpg)
5. Did Live Server refresh?

---

# 🧭 Final Mental Model Upgrade

Instead of thinking:

> “Will it display?”

Think:

> “Can the browser locate this file from the path I gave?”

---

# 🎯 Day 2 Summary

You learned:

* `<img>` tag
* `src` attribute (file location)
* `alt` attribute (fallback meaning)
* relative file paths
* folder-based navigation
* basic image sizing

---

If you understand this properly, Day 3 becomes easy because you’ve crossed the hardest early concept in HTML:

> the browser is not guessing anything — you must point to everything exactly.

---
