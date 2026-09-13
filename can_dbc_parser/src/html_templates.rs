pub(crate) const HTML_FULL: &str = r#"
---
---

<style>
    .can_message {
        width: 100%;
    }

    table td:first-child,
    table th:first-child {
        width: 100%;
    }

    thead tr > *:not(:first-child) {
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        white-space: nowrap;
    }

    tr > *:not(:first-child) {
        text-align: center;
    }
</style>

{msgs}
"#;

pub(crate) const HTML_MSG: &str = r#"
<details>
    <summary>{id} {message_comment} </summary>
    <p>Название: {name}</p>
    <p>Идентификатор: {id}</p>
    <p>Длина: {size} байт</p>

    <table class="can_message">
        <thead>
            <tr>
                <th></th>
                <th>Начальный бит</th>
                <th>Размер, бит</th>
                <th>Масштаб</th>
                <th>Смещение</th>
                <th>Минимум</th>
                <th>Максимум</th>
                <th>Ед. измерения</th>
            </tr>
        </thead>
        <tbody>
            {signals}
        </tbody>
    </table>

    {val_desc}
</details>"#;

pub(crate) const HTML_SIGNAL: &str = r#"
<tr>
    <td>{name} <br> {comment}</td>
    <td>{start_bit}</td>
    <td>{size}</td>
    <td>{factor}</td>
    <td>{offset}</td>
    <td>{min}</td>
    <td>{max}</td>
    <td>{unit}</td>
</tr>
"#;

pub(crate) const HTML_VAL_DESC: &str = r#"

<p>{caption}</p>
<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        {items}
    </tbody>
</table>
"#;

pub(crate) const HTML_VAL_DESC_ITEM: &str = r#"
<tr>
    <td>{id}</td>
    <td>{description}</td>
</tr>
"#;
