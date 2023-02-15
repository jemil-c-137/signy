import Layout from '@/components/layout';
import map from '../assets/img/map.png';
import Image from 'next/image';
import ContactForm from '@/components/contactFrom';
import { getContactsPageData } from '@/lib/api';
import { ContactsPageData } from '@/lib/types/contactsPage';

export default function Contacts({ contactsPage }: ContactsPageData) {
  const { title, subtext, contactOptions } = contactsPage;

  return (
    <Layout>
      <main className="section pt-24 pb-24">
        <h1 className="headline-1 mb-4 md:mb-8">{title}</h1>
        <div className="flex flex-col lg:flex-row mb-8">
          <div className="w-full lg:w-1/2 mr-32 mb-12">
            <p className="paragraph mb-4">{subtext}</p>
            <div>
              {contactOptions.map((option) => (
                <div key={option.id} className="mb-4 flex">
                  <span className="mr-6">
                    <Image width={option.logo.width} height={option.logo.height} src={option.logo.url} alt="" />
                  </span>
                  <div dangerouslySetInnerHTML={{ __html: option.text }}></div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Image width={'600'} height={100} src={map} alt="" />
          </div>
        </div>
        <div>
          <h2 className="headline-1 mb-8">...or write us:</h2>
          <ContactForm />
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps(): Promise<{ props: ContactsPageData }> {
  const data = await getContactsPageData();
  return {
    props: data,
  };
}
