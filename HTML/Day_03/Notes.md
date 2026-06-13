# 📘 Day 3 — Navigation, File Paths & Website Structure

---

# 🧠 Core Idea of Day 3

Up until now, I have been building a single webpage.

Today I learned:

> A website is a collection of pages connected together.

The browser does not magically know where pages are.

I must tell it exactly where to find them.

---

# 🌐 Internal Links

An internal link allows a user to move between pages inside the same project.

Example:

```html
<a href="hobbies.html">My Hobbies</a>
```

Meaning:

> Browser, open the file called `hobbies.html`.

---

## Important Realization

This is very similar to:

```html
<img src="photo.png">
```

Both are references to another resource.

| Tag            | Resource Being Loaded |
| -------------- | --------------------- |
| `<img src="">` | Image file            |
| `<a href="">`  | Another webpage       |

---

# 📁 File Path Thinking

Suppose my project looks like:

```text
project/
│
├── index.html
├── hobbies.html
└── photo.png
```

The browser can only load files if I provide the correct path.

Example:

```html
<img src="photo.png">
```

Meaning:

> Look for photo.png in the same folder as index.html.

---

## Common Beginner Mistake

Thinking:

> The browser will find the file automatically.

Wrong.

The browser only follows the path provided.

---

# 🧠 Mental Model

Think of it like:

| Component | Role         |
| --------- | ------------ |
| HTML      | Instructions |
| Browser   | Worker       |
| Folder    | Workspace    |
| File Path | Directions   |

When writing:

```html
<img src="photo.png">
```

I am giving directions to the browser.

---

# 🖼️ Images and Structure

I learned that images can be attached to list items.

Example:

```html
<ul>
    <li>
        FPV Drones
        <img src="fpv.png" alt="FPV Drone">
    </li>
</ul>
```

This communicates:

> The image belongs to this hobby.

---

## Structural Thinking

Question:

> Where does this image belong?

Good HTML is not about making things appear.

Good HTML is about expressing relationships between pieces of content.

---

# 📋 Lists vs Paragraphs

Example:

```html
<p>FPV Drones</p>
<p>3D Printing</p>
<p>Dioramas</p>
```

This works.

But it communicates:

> Three separate paragraphs.

---

Better:

```html
<ul>
    <li>FPV Drones</li>
    <li>3D Printing</li>
    <li>Dioramas</li>
</ul>
```

This communicates:

> Three related items belonging to one collection.

---

# 🧠 Semantic HTML

The question is not:

> Will the browser display this?

The question is:

> What does this content represent?

HTML describes meaning and structure.

The browser decides how to display it.

---

# 🌳 Hierarchy Thinking

I should think of HTML like a tree.

Example:

```text
My Website (h1)
│
├── About Me (h2)
│
├── Hobbies (h2)
│   ├── FPV Drones
│   ├── 3D Printing
│   └── Dioramas
│
└── Goals (h2)
```

Each element belongs somewhere in the structure.

---

# ⚠️ Important Lesson Learned

Just because something works does not mean it is the best structure.

Example:

```html
<p>FPV Drones</p>
```

works.

But:

```html
<li>FPV Drones</li>
```

may communicate the meaning more accurately.

---

# 🎯 Day 3 Takeaway

When writing HTML, I should stop asking:

> "How do I make this appear on the page?"

and start asking:

> "What does this content represent?"

Because HTML is not about appearance.

HTML is about structure, meaning, and relationships between content.

---

# 🚀 Progress So Far

### Day 1

* HTML document structure
* Headings
* Paragraphs
* Lists
* Semantic thinking

### Day 2

* Images
* File paths
* `src`
* `alt`
* Basic image sizing

### Day 3

* Internal links
* Website navigation
* Multi-page websites
* Resource referencing
* Structural thinking

---

This note is important because Day 3 is where your mindset started shifting from:

> "writing HTML tags"

to

> "designing the structure of information."

That's the foundation you'll keep building on as pages become larger and more complex.
