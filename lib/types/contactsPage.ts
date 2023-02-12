export interface ContactsPageData {
  contactsPage: {
    title: string;
    subtext: string;
    contactOptions: ContactOption[]
  }
}

interface ContactOption {
  text: string
  id: string
  logo: {
    url: string
    width: number;
    height: number;
  }
}