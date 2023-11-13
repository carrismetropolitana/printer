# Carris Metropolitana Printer

<!-- [![Better Stack Badge](https://uptime.betterstack.com/status-badges/v1/monitor/tf3p.svg)](https://status.carrismetropolitana.pt) -->

_In progress..._

---

### Base URL: `https://printer.carrismetropolitana.pt/[endpoint]`

---

### `POST /publish`

Publish a new job to the print queue.

**Example Request:**

```
{

    // required fields
    render_host: "escolas.carrismetropolitana.pt",
    render_path: "803239/render",


    // optional fields
    render_format: 'A4',
    owner_lang: "pt",
    owner_name: "Name of the User",
    owner_email: "user_email@example.com",
    gdpr_consent: true,
    filename: "Name of the downloaded file"

}
```

**Example Response:**

```
{

    acknowledged: true,
    insertedId: "job_id"

}
```

### `POST /update/:id`

Append additional owner info to a waiting job.

**Example Request:**

```
{

    owner_lang: "pt",
    owner_name: "André",
    owner_email: "andre@exemplo.com",
    gdpr_consent: true

}
```

**Example Response:**

```
{

    _id: "654acdcf816f9f9ba9ecd23a",

    status: "downloaded",

    date_registered: "2023-11-01T00:00:00.000Z",
    date_processing: "2023-11-01T00:00:00.000Z",
    date_ready: "2023-11-01T00:00:00.000Z",
    date_notified: ["2023-11-01T00:00:00.000Z"],
    date_downloaded: ["2023-11-01T00:00:00.000Z"],
    date_expired: null,

    owner_lang: "pt",

    render_host: "escolas.carrismetropolitana.pt",
    render_path: "803239/render",
    render_format: "A4",

    filename: "Name of the downloaded file"

}
```

### `GET /status/:id`

Returns the current status of the requested job.

**Example Response:**

```
{

    _id: "654acdcf816f9f9ba9ecd23a",

    status: "ready",

    date_registered: "2023-11-01T00:00:00.000Z",
    date_processing: "2023-11-01T00:00:00.000Z",
    date_ready: "2023-11-01T00:00:00.000Z",
    date_notified: ["2023-11-01T00:00:00.000Z"],
    date_downloaded: ["2023-11-01T00:00:00.000Z"],
    date_expired: null,

    owner_lang: "pt",

    render_host: "escolas.carrismetropolitana.pt",
    render_path: "803239/render",
    render_format: "A4",

    filename: "Name of the downloaded file"

}
```

### `GET /download/:id`

Downloads the rendered PDF file for the requested job.

# Other useful info

### Job Status

A job can have the following statuses:

| status       | description                                               |
| ------------ | --------------------------------------------------------- |
| `registered` | Job is waiting to be processed.                           |
| `paused`     | Job was manually paused.                                  |
| `processing` | Job is being rendered right now.                          |
| `ready`      | Job has finished rendering and is available for download. |
| `error`      | Job has encountered an error.                             |
| `downloaded` | Job has been downloaded at least once.                    |
| `expired`    | Job is expired and download is no longer possible.        |

# Contributing

If you'd like to contribute new features or help fix any errors, please fork this repository and submit a pull request. We welcome contributions of all kinds, including bug fixes, documentation improvements, and new features.
