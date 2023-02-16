import Layout from '@/components/layout';
import Accordion from '@/components/accordion';
import { useState } from 'react';
import ContactForm from '@/components/contactFrom';
import { getFaqPageData } from '@/lib/api';
import { FaqPageData } from '@/lib/types/faqPage';

const PopularQuestions = [
  {
    title: 'Why is a round pizza put in a square box, but cut into triangles?',
    content:
      'The reason that round pizzas are often packaged in square boxes is because square boxes are more space-efficient and easier to manufacture than round boxes. This allows pizzerias to reduce the amount of materials used in packaging, as well as the cost of production. Additionally, a square box is easier to stack and store than a round box, which can be difficult to stabilize and takes up more space.',
  },
  {
    title: 'Why does the road fail again after the repair?',
    content:
      'The reason a road may fail again after repair could be due to various factors such as using poor quality materials, poor workmanship, or underlying subsurface problems that were not addressed during the repair process.',
  },
  {
    title: 'Why is the water wet?',
    content:
      'Water is often referred to as "wet" because it has the ability to adhere to surfaces and transfer its moisture to them, leading to the perception of being wet. When water molecules come into contact with a surface, they form hydrogen bonds with each other and with the surface, creating a layer of water that can be felt and seen. This property of water is what gives it its unique ability to dissolve and transport dissolved substances, as well as its characteristic of being able to cool and lubricate objects. Simply put, water is considered wet because it has the ability to make other things wet.',
  },
  {
    title: 'Can microbes see each other?',
    content:
      'No, microbes such as bacteria and fungi cannot see each other in the same way that humans and animals can see each other. Microbes do not have eyes or a visual system, so they are unable to perceive light or images',
  },
  {
    title: 'Why is blood red and veins blue?',
    content:
      "Blood appears red because of the presence of oxygen-carrying molecules called hemoglobin in red blood cells. Hemoglobin is a protein that binds to oxygen in the lungs and transports it to the body's tissues. When hemoglobin is oxygenated, it gives blood its bright red color. Veins, on the other hand, appear blue because of the way that light penetrates and is absorbed by the skin and underlying tissues. Light from the sun or other sources enters the skin and is absorbed by the underlying tissue, leaving the veins, which are located closer to the surface, looking blue. The blue color is a result of the light that is not absorbed by the tissue but is instead reflected back to the observer. It's important to note that the blood inside veins is still red, even though the veins themselves appear blue. This is why veins appear blue when viewed through the skin, but red when the blood is removed and exposed the air.",
  },
  {
    title: 'What is a rainbow made of?',
    content:
      'A rainbow is a natural optical phenomenon that is caused by the refraction, or bending, of light as it passes through water droplets in the air. When light from the sun enters a water droplet, it slows down and bends, causing the light to separate into its individual colors, creating the characteristic rainbow spectrum of red, orange, yellow, green, blue, indigo, and violet.',
  },
];

const SignyWorkSettings = [
  {
    title: 'Why is the sky blue?',
    content:
      "The sky appears blue because of a phenomenon known as Rayleigh scattering. Light from the sun contains all the colors of the spectrum, including red, orange, yellow, green, blue, indigo, and violet. When this light reaches the Earth's atmosphere, it is scattered in all directions by particles such as air molecules, dust, and water droplets. Blue light has a shorter wavelength and higher frequency than the other colors, which makes it more susceptible to",
  },
  {
    title: 'How do plants grow?',
    content:
      'Plants grow by converting sunlight into energy through a process called photosynthesis. During photosynthesis, plants use chlorophyll in their leaves to absorb light energy and carbon dioxide from the air. The plant then uses this energy to convert the carbon dioxide into glucose, a type of sugar that the plant uses for food.',
  },
  {
    title: 'Why do we need to sleep?',
    content:
      'We need to sleep for several reasons, including allowing the brain to consolidate and process information acquired during the day, restoring physical health, supporting emotional and mental well-being, and helping with growth and development.',
  },
  {
    title: 'Why is the moon sometimes big and sometimes small?',
    content:
      'The appearance of the moon appearing sometimes big and sometimes small is called the Moon Illusion. The Moon Illusion is an optical illusion that makes the moon appear larger when it is near the horizon than when it is high in the sky.',
  },
  {
    title: 'How do airplanes fly?',
    content:
      'Airplanes fly due to the principles of lift, weight, thrust, and drag. Lift is the upward force that opposes the weight of the aircraft and allows it to rise into the air. Weight is the force of gravity that pulls the aircraft downward. Thrust is the forward force produced by the engine that propels the aircraft forward, and drag is the friction created by the movement of the aircraft through the air.',
  },
];

const WorkWithDocuments = [
  {
    title: 'What is electricity',
    content:
      'Electricity is a form of energy that is created by the flow of charged particles, typically electrons. It is a fundamental aspect of nature and is present in all living things, playing a role in biological processes such as nerve impulses and muscle contractions.',
  },
  {
    title: 'Why do we have to go to school?',
    content:
      'Going to school is important because it provides individuals with the education and skills they need to succeed in life. It is a structured environment for learning, where individuals can acquire knowledge and skills in various subjects, prepare for their future, develop critical thinking and problem-solving skills, and build social skills and relationships. It is essential for personal and professional growth and success.',
  },
  {
    title: 'How do fish breathe underwater?',
    content:
      "structures that are located on either side of a fish's head. They are specialized organs that extract oxygen from the water and excrete carbon dioxide.",
  },
];

export default function Faq({ faqPage }: FaqPageData) {
  const { questionTypes } = faqPage;

  const questions = questionTypes.map((q) => {
    return {
      questions: q.questions.map((question) => {
        return {
          title: question.question,
          content: question.answer,
        };
      }),
      id: q.id,
      name: q.name,
    };
  });

  const [expanded, setExpanded] = useState<number[]>([]);

  const handleExpanded = (idx: number) => {
    const q = expanded.indexOf(idx);

    if (q < 0) {
      setExpanded((prev) => [...prev, idx]);
    } else {
      const updatedArr = expanded.filter((item) => item !== idx);
      setExpanded(updatedArr);
    }
  };

  return (
    <Layout title="Signy - FAQ" canonicalLink="https://signy.vercel.app/faq">
      <section className="section py-24">
        <div className="max-w-xl">
          <h1 className="headline-1 mb-8">Popular questions and answers</h1>

          {questions.map((item, index) => (
            <div>
              <h3 onClick={() => handleExpanded(index)} className="headline-2 mb-4">
                {item.name} {expanded.indexOf(index) !== -1 ? '-' : '+'}
              </h3>
              {expanded.indexOf(index) !== -1 && <Accordion list={item.questions} />}
              {expanded.indexOf(index) === -1 && <span>Answers: {PopularQuestions.length}</span>}
            </div>
          ))}
        </div>
      </section>
      <section className="section-cyan py-12">
        <div className="flex flex-col justify-center items-center">
          <h2 className="headline-1 text-center mb-4">No answer for your question?</h2>
          <p className="headline-2 text-center mb-8">fill the contact form</p>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps(): Promise<{ props: FaqPageData }> {
  const data = await getFaqPageData();
  return {
    props: data,
  };
}
