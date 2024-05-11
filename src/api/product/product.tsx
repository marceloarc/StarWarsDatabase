const PRODUCTS = [
  {
      id: 100,
      name: 'Camisa Star Wars',
      price: 350,
      image: "https://img.elo7.com.br/product/685x685/20BAFB5/camisetas-masculina-ou-feminina-star-wars-the-last-jedi-darth-vader.jpg",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis ullamcorper viverra. Suspendisse quis elit vel justo ultrices cursus. Donec ipsum odio, tincidunt fringilla semper non, vestibulum eu arcu. Phasellus efficitur ante sit amet nulla lacinia ultrices. Proin leo quam, convallis eget congue ac, efficitur a eros. Quisque a sagittis est. Nulla fringilla libero placerat, mattis velit vitae, elementum nisl. Etiam ut scelerisque ligula, eget tristique nulla. Donec eu imperdiet magna. Duis sollicitudin varius eleifend. Nam urna nibh, posuere quis ultrices sed, dignissim in orci. Nullam porta velit justo, vel ullamcorper nisi pulvinar vel. Etiam dapibus efficitur odio, nec bibendum metus laoreet quis.',
      quantity:2
  },
  {
      id: 101,
      name: 'Sabre de luz',
      price: 350,
      image: 'https://ricksforge.com.br/cdn/shop/files/X5A7524.jpg?v=1689899177&width=600',
      description: 'Vários personagens de vários animes diferentes',
      quantity:10
  },
  {
      id: 102,
      name: 'Caneca Star Wars',
      price: 600,
      image: 'https://cdn.awsli.com.br/2500x2500/180/180275/produto/7329163/e02eaabe40.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis ullamcorper viverra. Suspendisse quis elit vel justo ultrices cursus. Donec ipsum odio, tincidunt fringilla semper non, vestibulum eu arcu. Phasellus efficitur ante sit amet nulla lacinia ultrices. Proin leo quam, convallis eget congue ac, efficitur a eros. Quisque a sagittis est. Nulla fringilla libero placerat, mattis velit vitae, elementum nisl. Etiam ut scelerisque ligula, eget tristique nulla. Donec eu imperdiet magna. Duis sollicitudin varius eleifend. Nam urna nibh, posuere quis ultrices sed, dignissim in orci. Nullam porta velit justo, vel ullamcorper nisi pulvinar vel. Etiam dapibus efficitur odio, nec bibendum metus laoreet quis.',
      quantity:4
  },
  {
      id: 104,
      name: 'Capa Jedi',
      price: 350,
      image: 'https://img.elo7.com.br/product/zoom/3379607/capa-mestre-jedi-star-wars.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis ullamcorper viverra. Suspendisse quis elit vel justo ultrices cursus. Donec ipsum odio, tincidunt fringilla semper non, vestibulum eu arcu. Phasellus efficitur ante sit amet nulla lacinia ultrices. Proin leo quam, convallis eget congue ac, efficitur a eros. Quisque a sagittis est. Nulla fringilla libero placerat, mattis velit vitae, elementum nisl. Etiam ut scelerisque ligula, eget tristique nulla. Donec eu imperdiet magna. Duis sollicitudin varius eleifend. Nam urna nibh, posuere quis ultrices sed, dignissim in orci. Nullam porta velit justo, vel ullamcorper nisi pulvinar vel. Etiam dapibus efficitur odio, nec bibendum metus laoreet quis.',
      quantity:1
  },
  {
    id: 1002,
    name: 'Camisa Star Wars 2',
    price: 350,
    image: "https://img.elo7.com.br/product/685x685/20BAFB5/camisetas-masculina-ou-feminina-star-wars-the-last-jedi-darth-vader.jpg",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis ullamcorper viverra. Suspendisse quis elit vel justo ultrices cursus. Donec ipsum odio, tincidunt fringilla semper non, vestibulum eu arcu. Phasellus efficitur ante sit amet nulla lacinia ultrices. Proin leo quam, convallis eget congue ac, efficitur a eros. Quisque a sagittis est. Nulla fringilla libero placerat, mattis velit vitae, elementum nisl. Etiam ut scelerisque ligula, eget tristique nulla. Donec eu imperdiet magna. Duis sollicitudin varius eleifend. Nam urna nibh, posuere quis ultrices sed, dignissim in orci. Nullam porta velit justo, vel ullamcorper nisi pulvinar vel. Etiam dapibus efficitur odio, nec bibendum metus laoreet quis.',
    quantity:2
},
{
    id: 1012,
    name: 'Sabre de luz 2',
    price: 350,
    image: 'https://ricksforge.com.br/cdn/shop/files/X5A7524.jpg?v=1689899177&width=600',
    description: 'Vários personagens de vários animes diferentes',
    quantity:10
},
{
    id: 1022,
    name: 'Caneca Star Wars 2',
    price: 600,
    image: 'https://cdn.awsli.com.br/2500x2500/180/180275/produto/7329163/e02eaabe40.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis ullamcorper viverra. Suspendisse quis elit vel justo ultrices cursus. Donec ipsum odio, tincidunt fringilla semper non, vestibulum eu arcu. Phasellus efficitur ante sit amet nulla lacinia ultrices. Proin leo quam, convallis eget congue ac, efficitur a eros. Quisque a sagittis est. Nulla fringilla libero placerat, mattis velit vitae, elementum nisl. Etiam ut scelerisque ligula, eget tristique nulla. Donec eu imperdiet magna. Duis sollicitudin varius eleifend. Nam urna nibh, posuere quis ultrices sed, dignissim in orci. Nullam porta velit justo, vel ullamcorper nisi pulvinar vel. Etiam dapibus efficitur odio, nec bibendum metus laoreet quis.',
    quantity:4
},
{
    id: 1042,
    name: 'Capa Jedi2',
    price: 350,
    image: 'https://img.elo7.com.br/product/zoom/3379607/capa-mestre-jedi-star-wars.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis ullamcorper viverra. Suspendisse quis elit vel justo ultrices cursus. Donec ipsum odio, tincidunt fringilla semper non, vestibulum eu arcu. Phasellus efficitur ante sit amet nulla lacinia ultrices. Proin leo quam, convallis eget congue ac, efficitur a eros. Quisque a sagittis est. Nulla fringilla libero placerat, mattis velit vitae, elementum nisl. Etiam ut scelerisque ligula, eget tristique nulla. Donec eu imperdiet magna. Duis sollicitudin varius eleifend. Nam urna nibh, posuere quis ultrices sed, dignissim in orci. Nullam porta velit justo, vel ullamcorper nisi pulvinar vel. Etiam dapibus efficitur odio, nec bibendum metus laoreet quis.',
    quantity:1
},
];

export function getProducts() {
  return PRODUCTS;
}
export function getProduct(id:number) {

    return PRODUCTS.find((product) => (product.id == id));
}
