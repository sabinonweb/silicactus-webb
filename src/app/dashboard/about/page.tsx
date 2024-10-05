import MegaPhone from "@/app/assets/Megaphone.png";
import GraphicPen from "@/app/assets/Graphic.png";
import WebPage from "@/app/assets/WebPage.png";
import ContentContainer from "@/app/ui/about/ContentContainer";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row flex-1 bg-[var(--primary-color)] items-center md:justify-evenly justify-center flex-wrap">
      <ContentContainer
        Icon={MegaPhone}
        DisplayText="Engaging designs that inspire action"
        MainText=" At Silicactus, we believe that effective graphic design is at
                the heart of every successful brand. Our talented team of
                designers is dedicated to creating visually stunning and
                impactful designs that resonate with your target audience.
                
                 At Silicactus, we believe that effective graphic design is at
                the heart of every successful brand. Our talented team of
                designers is dedicated to creating visually stunning and
                impactful designs that resonate with your target audience."
        number={1}
      />

      <ContentContainer
        Icon={GraphicPen}
        DisplayText="Crafting dynamic websites that perform"
        MainText=" At Silicactus, we believe that effective graphic design is at
                the heart of every successful brand. Our talented team of
                designers is dedicated to creating visually stunning and
                impactful designs that resonate with your target audience.
                
                 At Silicactus, we believe that effective graphic design is at
                the heart of every successful brand. Our talented team of
                designers is dedicated to creating visually stunning and
                impactful designs that resonate with your target audience."
        number={2}
      />

      <ContentContainer
        Icon={WebPage}
        DisplayText="Boost your brand's online presence"
        MainText=" At Silicactus, we believe that effective graphic design is at
                the heart of every successful brand. Our talented team of
                designers is dedicated to creating visually stunning and
                impactful designs that resonate with your target audience.
                
                 At Silicactus, we believe that effective graphic design is at
                the heart of every successful brand. Our talented team of
                designers is dedicated to creating visually stunning and
                impactful designs that resonate with your target audience."
        number={3}
      />
    </div>
  );
}
