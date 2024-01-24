const gqlAllVinoQuery = `
  query {
    vinaCollection {
      items {
        sys {
          id
        }
        naziv
        slika {
          url
          title
        }
        vrsta
        kvaliteta
        berba
        alkohol
        opis
      }
    }
  }
`;

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`;

interface VinaCollectionResponse{
    vinaCollection: {
        items: VinoItem[];
    }
}

interface VinoItem{
    sys: {
        id: string;
    };
    naziv: string;
    vrsta: string;
    kvaliteta: string;
    berba: number;
    alkohol: string;
    opis: string;
    slika: {
        url: string;
        title: string;
    }
}

/* Sad želimo napraviti interface za konačne parsirane podatke */
export interface TypeVineListItem{
  id: string;
  naziv: string;
  vrsta: string;
  kvaliteta: string;
  berba: number;
  alkohol: string;
  opis: string;
  slika: string;
}

/*
So, in summary, the use of JSON.stringify
ensures that the content of the body is properly formatted as a JSON string, 
which is a common requirement when interacting with web APIs, 
including GraphQL.
*/

const getAllVines = async (): Promise<TypeVineListItem[]> => {
  try{
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY}`,
      },
      body: JSON.stringify({ query: gqlAllVinoQuery }),
    })

    const body = (await response.json()) as {
      data: VinaCollectionResponse;
    };

    const parsedData: TypeVineListItem[] = 
    body.data.vinaCollection.items.map((item) => ({
      id: item.sys.id,
      naziv: item.naziv,
      vrsta: item.vrsta,
      kvaliteta: item.kvaliteta,
      berba: item.berba,
      alkohol: item.alkohol,
      opis: item.opis,
      slika: item.slika.url,
    }));
    
    return parsedData;
    
  }catch (err) {
    console.log(err);

    return [];
  }
};

const contentfulService = {
  getAllVines,
};

export default contentfulService;