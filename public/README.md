# Images this site expects

Every slot renders a neutral colour block with a caption until a real file exists at
the path below. Drop files in, keep the filenames, and they appear — no code change needed.

| Path | Used on | Suggested size | Status |
| --- | --- | --- | --- |
| `hero.jpg` | Home hero (circular crop) | 1200 × 1200 | ✅ MEDiCOS logo in place |
| `posts/your-first-eight-weeks.jpg` | Home card + post lead | 1600 × 900 | needed |
| `posts/locked-out-of-the-student-portal.jpg` | Home card + post lead | 1600 × 900 | needed |
| `posts/lecture-hall-to-ward.jpg` | Home card + post lead | 1600 × 900 | needed |
| `lecturers/lecturer-1.jpg` … `lecturer-8.jpg` | Lecturer directory (circular crop) | 400 × 400 | needed |
| `portals/mnu-1.png` … `mnu-6.png` | MNU login guide steps | 1600 × 900 | needed |
| `portals/mohe-1.png` … `mohe-6.png` | MoHE login guide steps | 1600 × 900 | needed |

After adding a file, reference it in the matching data file:

- Posts — set `image: "/posts/your-first-eight-weeks.jpg"` in `data/posts.ts`
- Lecturers — set `photo: "/lecturers/lecturer-1.jpg"` in `data/lecturers.ts`
- Hero and portal screenshots — pass `src` to `<ImageSlot>` in the page

Blur real names, ID numbers and anything personal out of portal screenshots before committing them.
