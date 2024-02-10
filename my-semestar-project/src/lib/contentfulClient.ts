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
        sorta
        pakiranje
        cijena
        stanje
      }
    }
  }
`;

const gqlVinoByIdQuery = `
query getProductById($vinoid: String!){
	vina(id: $vinoid){
    sys{
      id
    }
  	naziv,
    slika{
      url
    },
    vrsta,
    kvaliteta,
    berba,
    alkohol,
    opis
    sorta
    pakiranje
    cijena
    stanje
  }
}
`;

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`;

interface VinaCollectionResponse{
  vinaCollection: {
      items: VinoItem[];
  }
}

interface VinoIdResponse{
  vina: {
    sys: {
      id: string;
    };
    naziv: string;
    vrsta: string;
    kvaliteta: string;
    berba: number;
    alkohol: string;
    opis: string;
    sorta: string;
    pakiranje: string;
    cijena: number;
    stanje: boolean;
    slika: {
      url: string;
    }
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
    sorta: string;
    pakiranje: string;
    cijena: number;
    stanje: boolean;
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
  sorta: string;
  pakiranje: string;
  cijena: number;
  stanje: boolean;
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
      sorta: item.sorta,
      pakiranje: item.pakiranje,
      cijena: item.cijena,
      stanje: item.stanje,
    }));
    
    return parsedData;
    
  }catch (err) {
    console.log(err);

    return [];
  }
};

const getVineById = async (id: string): Promise<TypeVineListItem | null> => {
  try{
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY}`,
      },
      body: JSON.stringify({
        query: gqlVinoByIdQuery,
        variables: {vinoid: id},
      }),
    });

    const body = (await response.json()) as {
      data: VinoIdResponse;
    }

    const vine = body.data.vina;

    const parsedData: TypeVineListItem = {
      id: vine.sys.id,
      naziv: vine.naziv,
      vrsta: vine.vrsta,
      kvaliteta: vine.kvaliteta,
      berba: vine.berba,
      alkohol: vine.alkohol,
      opis: vine.opis,
      slika: vine.slika.url,
      sorta: vine.sorta,
      pakiranje: vine.pakiranje,
      cijena: vine.cijena,
      stanje: vine.stanje,
    }

    return parsedData;
  } catch(err){
    console.log(err);
    return null;
  }
}

const contentfulService = {
  getAllVines,
  getVineById
};

export default contentfulService;