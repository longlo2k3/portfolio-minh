# Báo Cáo Test - Đối Chiếu content.txt vs Code Website

**Ngày test:** 09/09/2026
**Vai trò:** Tester
**Nguồn yêu cầu:** `content.txt` (87 dòng)
**Phạm vi code:** `index.html`, `src/App.tsx`, `src/components/*`, `src/data/*`, `img/`

## 1. Kết Luận Tổng Quan

> **Code đạt ~67% yêu cầu.**

| Tổng đầu mục | Đạt 100% | Đạt 70-85% | Thiếu nặng <50% |
|---|---|---|---|
| 12 | 1 | 7 | 4 |

## 2. Bảng Chi Tiết Coverage

| # | Yêu cầu trong content.txt | Vị trí code hiện tại | Mức đạt | Ghi chú |
|---|---|---|---|---|
| 1 | About me - Hi, Welcome + phải giới thiệu funny | `src/components/AboutSection.tsx:18` | 100% ✅ | Funny intro + 4 highlights tốt |
| 2.1 | Journey - GART / Robotics: Mock Gart Blue Team, FTC Thanh Hoa, FTC National, FTC Worlds, Deputy PM, Expo/Camp/Training | `src/data/projectsData.ts:47-72`, `src/data/journeyData.ts:58-72`, `src/components/JourneyModal.tsx:87-135`, `src/components/MarqueeSection.tsx:3-29` | 45% ⚠️ | Gộp chung 1 card, thiếu ảnh riêng, thiếu TV+Press |
| 2.1 | EnviroTrack [Images + Poster] | `src/data/projectsData.ts:73-98` | 75% ⚠️ | Thiếu Poster + mobile app |
| 2.2 | Conrad Challenge [link ideon + Images + Link CAD + Link đội thi] | `src/data/projectsData.ts:19-45` | 75% ⚠️ | Mới có 1/3 link |
| 3.1 | Samsung SST [Images] | `src/data/journeyData.ts:12-27` | 85% ✅ | Thiếu Korean training |
| 3.2 | INS Internship [Image] | `src/data/journeyData.ts:28-42` | 80% ✅ | Thiếu shoutout Martin Dao + Son |
| 3.3 | Research [image + pdf journal] | `src/data/journeyData.ts:43-57` | 80% ⚠️ | Thiếu link PDF journal |
| 4.1 | Stembridge [Images + FB Links + Link báo] | `src/data/projectsData.ts:125-150` | 70% ⚠️ | Thiếu FB + báo link, gộp 3 pillars |
| 4.2 | Volunteer Cosmosics, Red River Vex [images] | `src/data/projectsData.ts:142` (1 dòng spec) | 20% ❌ | Không section riêng, không ảnh |
| 5 | My achievements (cert + ảnh nhận giải) | `src/components/ProjectModal.tsx:99-113` (text awards) | 30% ❌ | Không gallery riêng |
| 6.1 | Aviation [image + facebook] | `src/data/projectsData.ts:99-124`, `src/components/HeroSection.tsx:22-28` | 85% ✅ | Thiếu Facebook link, link='#' |
| 6.2 | Musics [image + vids] | `src/components/AboutSection.tsx:37-40`, `src/data/journeyData.ts:88-102` | 60% ⚠️ | Thiếu video, thiếu chi tiết |

Cách tính: (100+45+75+75+85+80+80+70+20+30+85+60)/12 = 67.08%

## 3. Điểm Đạt Tốt

- About funny đúng tinh thần yêu cầu.
- Conrad, EnviroTrack, Samsung, INS, Research bám sát nội dung story gốc.
- HeroSection, Marquee tận dụng tốt kho ảnh `img/` có sẵn.
- HomeA320 và Stembridge kể chuyện đầy đủ, cảm xúc.

## 4. Điểm Còn Thiếu

### 4.1. Thiếu nặng (Fail / Partial nặng)

1. **Volunteer (20%)**
   - Yêu cầu: Cosmosics water rocket + holography Lang Son, field resetter Red River VEX V5, kèm [images].
   - Thực tế: chỉ 1 dòng `Cosmosics Water Rocketry, Red River VEX Judge`.
   - Kho ảnh `img/cosmosic/` có 60+ file nhưng toàn `.HEIC/.MOV`, trình duyệt không hiển thị. Chưa convert sang JPG/MP4 (H.264) và chưa dùng.

2. **My achievements (30%)**
   - Yêu cầu: section riêng `cert + ảnh nhận giải`.
   - Thực tế: không có section, chỉ text awards trong modal.
   - Thiếu: ảnh cert WICO, FTC Design Award, Samsung cert, ảnh nhận giải Deputy PM, ảnh TV+Press.

3. **Mock GART Blue Team (trong 2.1 - 45%)**
   - Yêu cầu: `[ảnh Mock Gart 2026] + [Image of robot]`.
   - Thực tế: chỉ nhắc `mentored Team Bluebook` trong fullStory, không card/ảnh riêng.

4. **GART chi tiết:**
   - Thanh Hoa Scrimmage: mới có 1 ảnh marquee `img/FTC Thanh Hoa/IMG_6820.JPG`, không story, không ảnh robot kèm.
   - FTC National / Worlds: có story vô địch 16 trận, Edison Top Alliance, Finalist Alliance nhưng thiếu `[TV+Press] + [Image of robot]` theo yêu cầu.
   - Deputy PM Recognition: mới text award, thiếu `[Image]`.
   - Gart Expo / Camp / Internal training: ảnh Expo 2025, Camp 2025 chỉ chạy marquee, không giải thích `spreading robotics, stem activities, inviting teams`, không chi tiết `VEX IQ at American Embassy`, `training curriculum 40 members`, `34 mentors`, story `VuaMock về nhì`, `Hanoi markets`.

### 4.2. Thiếu link / file đính kèm

| Yêu cầu | Thực tế | File liên quan |
|---|---|---|
| Conrad: Link CAD + Link đội thi trên web Conrad | Chỉ có `https://ideon.skyhi.vn/about` | `src/data/projectsData.ts:43-44` |
| Research: pdf journal | Không có nút PDF | `src/data/journeyData.ts:43-57`, `src/components/JourneyModal.tsx` |
| Stembridge: FB Links + Link báo | Chỉ text `Featured on Education...` | `src/data/projectsData.ts:143` |
| Aviation: facebook HomeA320 | `link: '#'` | `src/data/projectsData.ts:122` |
| EnviroTrack: Poster + mobile app alerts/predictions | Không poster, spec chỉ ghi `Public Real-time Air Quality Map` | `src/data/projectsData.ts:73-98` |
| Musics: vids | Không embed video | `img/Stembridge/*.MP4`, `img/Wico/Wico/*.MP4` chưa dùng |

### 4.3. Thiếu chi tiết story

- **Samsung SST:** thiếu `Korean-language training`, `Science and Technology Lab` bị lược.
- **INS Internship:** thiếu `shoutout supervisor Martin Dao + fellow Son juice every evening`.
- **Music:** lược `14th birthday gift old electric guitar`, `anti-war / counterculture / individualism`, `summer weekends near Van Mieu Coffee`, `More Than a Feeling / It's My Life`.
- **Stembridge:** gộp 3 pillars (Stem fairs / Makerspace donation / Workshop) thành 1 card, chưa tách visual riêng cho Quan Son 300 HS vs Xa Dan deaf school.

## 5. Lỗi Kỹ Thuật Tester Phát Hiện

- Ảnh `.HEIC` trong `img/cosmosic/`, `img/Stembridge/Truong Xa Dan/`, `img/gart expo 2026/` không hiển thị trên web. Cần convert sang JPG/WebP.
- Link placeholder `'#'` ở EnviroTrack, HomeA320, Stembridge làm nút Live Project không hoạt động - `src/components/ProjectModal.tsx:140`.
- `MarqueeSection.tsx` dùng nhiều ảnh nặng 3-8MB (`File_000.png`), chưa optimize, dễ chậm load.

## 6. Đề Xuất Ưu Tiên Fix

1. P0: Tạo section `Achievements` gallery cert + ảnh trao giải + TV/Press.
2. P0: Tạo section `Volunteer` riêng + convert HEIC/MOV sang JPG/MP4.
3. P1: Tách `Mock GART`, `Thanh Hoa`, `National`, `Worlds`, `Expo/Camp` thành timeline có ảnh + caption robot riêng.
4. P1: Bổ sung 6 links còn thiếu: CAD, Conrad team page, FB Stembridge, báo, FB HomeA320, PDF journal, Poster EnviroTrack, video Music.
5. P2: Bổ sung story còn thiếu: Korean training, Martin Dao/Son, VEX IQ Embassy, VuaMock về nhì, birthday guitar.
