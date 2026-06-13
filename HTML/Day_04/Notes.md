# 📘 Day 4 — Semantic HTML & Website Structure

## 🎯 Main Goal

Today I learned that HTML is not just about making content appear on a webpage.

HTML is about:

* Structure
* Meaning
* Relationships between content

The question is no longer:

> "Will this display in the browser?"

The better question is:

> "What does this content represent?"

---
# 🧠 Core Realization

Both of these work:

```html
<h1>Raja Vikraman</h1>

<a href="hobbies.html">Hobbies</a>

<p>Hello</p>

<p>Created by Raja</p>
```

and

```html
<header>
	<h1>Raja Vikraman</h1>
</header>

<nav>
	<a href="hobbies.html">Hobbies</a>
</nav>

<main>
	<p>Hello</p>
</main>

<footer>
	<p>Created by Raja</p>
</footer>
```

The browser can display both.

The difference is that the second version communicates **meaning**.

---

# 🏗️ Semantic Layout Elements

## `<header>`

Represents:

> The introduction of a page or section.

Common contents:

* Website title
* Logo
* Main heading

Example:

```html
<header>
	<h1>Raja Vikraman</h1>
</header>
```

---

## `<nav>`

Represents:

> Navigation links used to move around the website.

Example:

```html
<nav>
	<a href="index.html">Home</a>
	<a href="hobbies.html">Hobbies</a>
</nav>
```

This tells browsers and accessibility tools:

> These links are part of the site's navigation system.

---

## `<main>`

Represents:

> The primary content of the page.

Everything unique to the page generally belongs here.

Example:

```html
<main>
	...
</main>
```

---

## `<section>`

Represents:

> A distinct topic within the page.

Example:

```html
<section>
	<h2>About Me</h2>
	<p>Computer Science Student...</p>
</section>
```

A section is not just a container.

A section represents a meaningful topic.

---

## `<footer>`

Represents:

> Closing or supporting information.

Common contents:

* Copyright notices
* Contact information
* Author information

Example:

```html
<footer>
	<p>© 2026 Raja Vikraman</p>
</footer>
```

---

# 🌳 Hierarchy Thinking

A webpage should be viewed as a hierarchy.

Example:

```text
Page
│
├── Header
│
├── Navigation
│
├── Main
│   │
│   ├── About Me
│   ├── Hobbies
│   ├── Goals
│   └── Projects
│
└── Footer
```

The structure communicates relationships between content.

---

# 📚 Sections vs Lists

One of the most important lessons from Day 4.

---

## Use a List When:

The content is simply a collection of related items.

Example:

```html
<ul>
	<li>RC Cars</li>
	<li>Photography</li>
	<li>Dioramas</li>
</ul>
```

Meaning:

> These are items in a collection.

Examples:

* Grocery lists
* Programming languages
* Favorite movies
* Hobbies (simple version)

---

## Use a Section When:

The content is an independent topic with its own information.

Example:

```html
<section>
	<h2>RC Cars</h2>
	<p>Information about RC Cars...</p>
	<img src="cars.jpeg" alt="RC Cars Collection">
</section>
```

Meaning:

> This is a complete topic.

Examples:

* About Me
* Goals
* Projects
* RC Cars
* Photography
* Dioramas

---

# 🧠 Important Rule

Ask:

> Is this just an item in a collection?

Use:

```html
<ul>
	<li>...</li>
</ul>
```

---

Ask:

> Is this a topic that deserves its own content?

Use:

```html
<section>
	...
</section>
```

---

# 🚀 Website Growth Thinking

Initially:

```text
Home Page
│
├── About Me
├── Hobbies
└── Goals
```

Keeping everything on one page is acceptable.

---

As content grows:

```text
Home Page
│
├── About Me
├── Goals
└── Hobbies Page
```

And then:

```text
Hobbies Page
│
├── RC Cars
├── Photography
└── Dioramas
```

Large topics can become separate pages.

---

# 🧠 Semantic HTML Benefits

Semantic HTML helps:

### Developers

Makes code easier to understand and maintain.

### Browsers

Provides meaningful structure.

### Search Engines

Helps identify important content.

### Accessibility Tools

Helps screen readers understand page organization.

---

# 🎯 Day 4 Mental Model

Think of a website like a shopping mall:

```text
<header>  = Main Entrance

<nav>     = Directory / Navigation

<main>    = Mall Building

<section> = Individual Stores

<footer>  = Exit Information
```

Every part has a purpose.

---

# 📌 Key Takeaway

HTML is not about:

> Making things appear on a page.

HTML is about:

> Describing what content is and how it relates to other content.

Good HTML answers:

> "What does this content represent?"

instead of:

> "How do I make this look right?"

---

# ✅ Day 4 Completion Checklist

* [x] Learned `<header>`
* [x] Learned `<nav>`
* [x] Learned `<main>`
* [x] Learned `<section>`
* [x] Learned `<footer>`
* [x] Understood semantic HTML
* [x] Learned hierarchy thinking
* [x] Learned when to use lists vs sections
* [x] Learned website structure design
* [x] Understood that HTML describes meaning, not appearance

---

## 🏆 Milestone Reached

By the end of Day 4, I am no longer simply writing HTML tags.

I am making decisions about:

* Information structure
* Content hierarchy
* Website organization
* Semantic meaning

This is the foundation of real web development.
