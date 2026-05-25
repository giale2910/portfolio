export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 px-6 py-28"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-14 text-center text-5xl font-black">
          Contact Me
        </h2>

        <form className="glass rounded-[32px] p-10 shadow-xl">
          <div className="grid gap-6 md:grid-cols-2">
            <input
              placeholder="Your Name"
              className="rounded-2xl border p-4 outline-none"
            />

            <input
              placeholder="Your Email"
              className="rounded-2xl border p-4 outline-none"
            />
          </div>

          <textarea
            rows={6}
            placeholder="Message..."
            className="mt-6 w-full rounded-2xl border p-4 outline-none"
          />

          <button className="mt-6 rounded-full bg-[#ff8ba7] px-8 py-4 text-white shadow-lg transition hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}