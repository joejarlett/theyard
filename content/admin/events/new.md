---
title: New Event
---

{{< wrapper "event-create-form" nomarkdown >}}
<form>
    <div>
      <label for="title">Title:</label>
      <input type="text" id="title"  name="title" x-model="formData.title" />
    </div>
    <div>
      <label for="date">Date:</label>
      <input type="text" id="date"  name="date" x-model="formData.date" />
    </div>
    <div>
      <label for="body">Body:</label>
      <textarea id="body"  name="body" x-model="formData.body"></textarea>
    </div>
    <div>
      <label for="scope">Scope:</label>
      <select id="scope" name="scope">
        <option value="general">General</option>
        <option value="residence">Residents of The Yard</option>
      </select>
    </div>
</form>
{{< /wrapper>}}