import { Song, CastMember, TeamMember } from './types';

export const PROGRAM_SONGS: Song[] = [
  { id: 1, title: "Any Moment, Any Time" },
  { id: 2, title: "Fa-La-La-La-La-La" },
  { id: 3, title: "Call His Name Jesus" },
  { id: 4, title: "Do Not Be Afraid" },
  { id: 5, title: "Angie’s Theme Underscore" },
  { id: 6, title: "Joseph, Son of David" },
  { id: 7, title: "You Can Count on Jesus" },
  { id: 8, title: "Mother to a Savior and King" },
  { id: 9, title: "Glory in the Highest" },
  { id: 10, title: "All Is Well" },
  { id: 11, title: "All Is Well (Underscore)" },
  { id: 12, title: "A Special Delivery" },
];

export const ANGELS: CastMember[] = [
  { role: "Michael", name: "Mikhail Poddyachiy" },
  { role: "Gabriel", name: "Jacob Marinov" },
  { role: "Mikey", name: "Stepan Kurudimov" },
  { role: "Melody", name: "Zlata Kurudimov" },
  { role: "Angie", name: "Anna Nagasev" },
  { role: "Annabelle", name: "Inessa Kruts" },
  { role: "Victoria", name: "Mila Callahan" },
  { role: "Luke", name: "Stas Moldovan" },
];

export const HOLY_FAMILY: CastMember[] = [
  { role: "Mary", name: "Daniella Dyachenko" },
  { role: "Joseph", name: "Max Korneichuk" },
];

export const SHEPHERDS: string[] = ["Andrey Kurudimov", "Dmitriy Korol", "Vitaliy Moldovan"];
export const WISE_MEN: string[] = ["Pavel Korneichuk", "Vadim Khramtsov", "Pavel Kushnir"];

export const CHOIR: string[] = [
  "Mila Callahan", "Bella Callahan", "Anastasia Fauryan", "Ruslan Gnedin",
  "Daniela Khamtsova", "Benjamin Khamtsov", "Inessa Kruts", "Nastya Kurudimov",
  "Zlata Kurudimov", "Stepan Kurudimov", "Emma Kushnir", "Solomiia Kushnir",
  "Suzzanna Kushnir", "Kiril Lazarev", "Leeza Marinov", "Elijah Marinov",
  "Milana Nagasev", "Christina Nagasev", "Mark Nagasev", "Timofey Narzullayev",
  "Amira Tsipan", "Yuna Tsipan", "Vanessa Tyulyu", "Lizzie Yurchak",
  "Daniel Yurchak", "Sofia Yakimtsev", "Ethan Kapakly", "Ben Korol",
  "Paul Balatsky", "Steven Balatsky", "Stas Moldovan", "Sarah Kurudimov",
  "Yulianna Narzullayeva"
];

export const PRODUCTION_MUSIC: TeamMember[] = [
  { role: "Musical Director", name: "Alyona Nagasev" },
  { role: "Production Supervisor", name: "Michael Nagasev" },
  { role: "Conductor", name: "Diana Kurudimov" },
];

export const PRODUCTION_CREATIVE: TeamMember[] = [
  { role: "Interior Design", name: "Pavel & Liliya Dyachenko" },
  { role: "Choir Assistants", name: "Angelina Nagasev, Nataliya Kapakly" },
  { role: "Costume & Decor", name: "Lyudmila Kurudimov" },
  { role: "Decor Assistant", name: "Mikhail Kucher" },
  { role: "Script & Acting", name: "Yelena Melnichuk" },
];

export const PRODUCTION_TECH: TeamMember[] = [
  { role: "Audio Engineer", name: "Sergey Turkack" },
  { role: "Audio Mixing", name: "Oleksandr Turkach" },
  { role: "Stage Light", name: "Vitaliy Lozov" },
  { role: "Video", name: "Alexander Vivsik (FSEBC Video Team)" },
  { role: "Courtyard Hosts", name: "Oksana & Yevgeniy Marinov" },
  { role: "Photography Director", name: "Nastya Tsiro" },
  { role: "Activities & Crafts", name: "Lyuba & Vasilena Kurudimov" },
  { role: "Café Host", name: "Karina Inje" },
];