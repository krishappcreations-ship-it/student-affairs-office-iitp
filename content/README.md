# SAO Content Dataset — data dictionary & legend

This folder is the **single source of content** for the Student Affairs Office site. The site must be **data-driven**: components render from these JSON files. Editing content (including who holds which role) should never require code changes.

## Real vs Dummy legend
Every meaningful field carries a `tag` (or `_tag`):
- **real** — grounded in `iitp.ac.in` / official subdomains (see `../scrape/`). Safe and accurate.
- **approximate** — brand inference (e.g. palette/fonts); verify in design phase.
- **dummy** — fabricated but plausible. **Must be replaced before any official/real deployment.** For DeployIITP this is allowed (hosts permitted dummy data).

## Files
| File | Purpose | Real? |
|---|---|---|
| `site.json` | name, motto, brand tokens, fonts, nav IA | mixed (motto/logo real) |
| `about.json` | About SAO + stats | stats real, narrative dummy |
| `vision-mission.json` | vision, mission, values | all dummy |
| `responsibilities.json` | key responsibilities | functions real, framing dummy |
| `welfare.json` | welfare programs | mixed |
| `campus-life.json` | fests, clubs, areas | mostly real |
| `initiatives.json` | major initiatives | all dummy |
| `team.json` | people — **role titles real, names dummy** | mixed |
| `gallery.json` | photos | images real, captions dummy |
| `resources.json` | links & downloads | links real, downloads dummy |
| `faq.json` | Q&A | mixed |
| `contact.json` | contact + form spec | address real, rest dummy |
| `emergency.json` | emergency numbers | national real, campus dummy |

## Position-agnostic rule (portfolio, not position-locked)
`team.json` is **role-keyed and ordered**. To change who holds a post, edit only `name`/`photo`/`email`/`blurb`. To add/remove a role, add/remove an object and renumber `order`. No component edits. This keeps the site valid as positions change over time.

## Assets
Image paths under `/iitp/...` and `/team/...` resolve from the Next.js `public/` folder. Run `../scrape/download-assets.sh` from the project root to populate them; `gallery.json` also keeps `remoteUrl` as a fallback/source.

## Before real (non-competition) use
Replace every `dummy`/`placeholder` field — especially `emergency.json` campus numbers, `contact.json` SAO email/phone, and `team.json` names — with official data.
