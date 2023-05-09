import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex flex-row gap-2 items-center">
          <img
            src={logo}
            alt="summarize_logo"
            className="w-16 object-contain"
          />
          <h3 className="text-4xl   font-extrabold  ">
            <span className="orange_gradient">SummZ</span>
          </h3>
        </div>
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/kathiravanvellaisamy/ai-summarize")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        {" "}
        Generate articles like a human with
        <br className="max-md:hidden" />
        <span className="orange_gradient ml-1 ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Summarizer is trusted by millions worldwide to condense long articles,
        papers, or documents into key summary paragraphs using state-of-the-art
        AI
      </h2>
    </header>
  );
};

export default Hero;
