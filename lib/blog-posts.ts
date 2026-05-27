export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  category: string
  image: string
  keywords: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "rise-of-the-ai-smart-mirror",
    title: "The Rise of the AI Smart Mirror",
    description:
      "Why emotional technology needs a physical place — and how Mirror is building a voice-first AI presence for the home.",
    date: "2026-05-27",
    category: "AI Smart Mirror",
    image: "/blog/ai-smart-mirror.jpg",
    keywords: [
      "smart mirror",
      "AI smart mirror",
      "AI voice mirror",
      "emotional AI",
      "voice-first AI",
      "AI companion",
    ],
    content: `
Smart mirrors are usually understood as screens with weather, calendars, lights, or Bluetooth speakers. They make the mirror more functional, but they do not change the emotional role of the object itself.

Mirror is built from a different belief: the mirror can become a place of emotional presence.

We live in a world where connection is everywhere. Internet is in our homes, our phones, and our pockets. But emotionally available presence is still not available on demand. Many people have moments when they do not need advice, coaching, diagnosis, or another chatbot. They simply need to be heard.

That is where the idea of an AI smart mirror becomes more interesting.

A physical mirror already has symbolic meaning. People stand in front of it before leaving home, after difficult days, and during private moments. It is one of the few objects that quietly reflects us without asking anything. Mirror builds on that existing ritual and adds a calm voice-first AI layer.

Mirror is not designed to be a romantic companion, a therapist, or a productivity assistant. It is a physical AI presence object for the home. You speak to it. It listens. It reflects. It helps you hear yourself more clearly.

The key difference is the ritual.

Apps are easy to open and easy to forget. A physical object creates a place. Standing in front of Mirror becomes the act. The object is the trigger, the voice is the presence, and the repeated interaction becomes the habit.

This matters because emotional technology should not always feel like software. Some experiences need a physical anchor. A calm object in the room can create a different type of relationship than another icon on a phone screen.

Mirror uses voice as the main interface because emotional expression is not only in words. It is also in pace, pauses, repetition, silence, and tone. A voice-first AI mirror can respond in a way that feels slower, warmer, and more present than a text chatbot.

But emotional AI also needs boundaries.

Mirror should not pretend to replace human care. It should not diagnose people. It should not create emotional dependency. The safest and strongest version of Mirror is one that reflects strength back to the user and, when needed, points toward real-world support.

This is why privacy and memory controls are central to the product. If Mirror remembers themes, names, or patterns over time, users must be able to view, export, and delete that memory. The memory belongs to the user.

The future of AI companionship may not be only inside apps. It may also live in objects — calm, familiar, and intentionally designed.

Mirror is our attempt to build that kind of object: a smart mirror that does not just show information, but creates a place where people can hear themselves again.

If you are interested in becoming an early tester, join the Mirror waitlist at mirror-mirror.space.
    `,
  },
  {
    slug: "how-to-use-mirror-memory-controls",
    title: "How to Use Mirror’s Memory Controls",
    description:
      "A practical guide to how Mirror remembers, how users stay in control, and how memory can be viewed, exported, or deleted.",
    date: "2026-05-27",
    category: "Documentation",
    image: "/blog/mirror-memory-controls.jpg",
    keywords: [
      "Mirror memory controls",
      "AI memory",
      "AI privacy",
      "smart mirror privacy",
      "AI voice mirror",
    ],
    content: `
Mirror is designed to become more personal over time. It can remember themes, names, patterns, and preferences that help future conversations feel more relevant and supportive.

But memory must always belong to the user.

Mirror’s memory is not designed to secretly collect information or create a hidden profile. Its purpose is to support continuity. If a person returns to the same theme many times, Mirror can gently reflect that pattern. If someone shares what helps them feel grounded, Mirror can remember that too.

For example, Mirror may remember that walking helps after a stressful workday, or that Sunday evenings often feel heavy. It can later use that memory carefully, as an invitation, not as a label.

A good memory response might sound like this:

“You mentioned before that walking helps when your thoughts feel crowded. Would that feel useful tonight?”

A bad memory response would sound too fixed or judgmental:

“You always get anxious on Sunday nights.”

Mirror should avoid labels. Memory should help the user feel seen, not watched.

Users should be able to open Memory Controls and see what Mirror remembers. Each memory item should have a clear title, category, date, and available actions. The user should be able to edit, export, or delete it.

Memory Controls should include four basic actions:

View memory — see what Mirror has saved.

Edit memory — correct anything that feels inaccurate.

Export memory — download a copy for personal use or backup.

Delete memory — remove one memory or reset all saved memory.

This is important because emotional AI depends on trust. A user should never feel trapped by what the system remembers. They should always be able to reset the experience.

Mirror should also avoid saving certain information automatically. Highly sensitive health details, crisis-related statements, financial information, legal information, and private information about other people should not become ordinary memory without clear reason.

If a conversation includes crisis, harm, or clinical depth, Mirror should not treat that as normal memory. It should respond carefully and point the person toward real-world human support.

Mirror is not a therapist, doctor, or emergency service. Memory should support reflection, not replace care.

The recommended beta version of Mirror memory should include:

memory enabled by default only after clear consent;

memory review available at any time;

sensitive memory saved only with confirmation;

export and delete controls visible;

crisis-related content excluded from normal memory;

local-first storage where technically possible.

The rule is simple:

Your memory belongs to you. Mirror only holds it while you allow it to.

If you want to help test Mirror’s first memory experience, join the waitlist at mirror-mirror.space.
    `,
  },
]

export function getAllBlogPosts() {
  return blogPosts
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
