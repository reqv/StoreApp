export default function() {
  this.namespace = '/api';

  let productsU = [{
      type: 'product',
      id: "sony-xperia-xz",
      attributes:{
        name: "Sony Xperia XZ",
        desc: "Wielką wadą jest niedziałająca aplikacja NC+GO, brak obrazu, serwis Sony się wypiął na ten problem, Cyfra oznajmiła, że zna problem i już zgłosiła go autorowi aplikacji",
        price: 2012,
        image: "http://files.mgsm.pl/phones/sony-xperia-xz/sony-xperia-xz-big.jpg",
        availability: 2
      }
    },
      {
        type: 'product',
        id: "google-pixel",
        attributes:{
          name: "Google Pixel 32GB LTE Silver HK",
          desc: "Telefon stworzony przez Google. Posiada najlepiej ocenianą kamerę wśród wszystkich smartfonów. Baterię, wytrzymującą cały dzień. Nielimitowane zasoby pamięci na twoje zdjęcia i filmy. I jest pierwszym smartfonem z wbudowanym Google Assistant.",
          price: 4029,
          image: "https://bludiode.com/6034-large_default/google-pixel-32gb-lte-silver.jpg",
          availability: 12
        }
      },
      {
        type: 'product',
        id: "oneplus-3t",
        attributes:{
          name: "OnePlus 3T",
          desc: "Serdecznie polecam telefon, duża bateria, dash charge, mega wydajny. Jedynym minusem jest niedopracowany software, ale za jakiś czas to się mam nadzieje zmieni. Bardzo polecam. ",
          price: 300,
          image: "http://drop.ndtv.com/TECH/product_database/images/11162016120819AM_635_op3t.jpeg",
          availability: 0
        }
      }];

  this.get('/products', (db, request) => {
    if(request.queryParams.name !== undefined){
      let filteredProducts = productsU.filter(function(i){
        return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
      });
      return { data: filteredProducts};
    }else{
      return { data: productsU};
    }
  });
}
