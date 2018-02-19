import { Injectable } from '@angular/core';
import {  InMemoryDbService } from "angular-in-memory-web-api";

@Injectable()
export class InMemoryApiService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const users = [
  {
    "id": "5a8b0274a937f0682ac68ab3",
    "isActive": false,
    "name": "Boyer Mcclure",
    "email": "boyermcclure@hopeli.com"
  },
  {
    "id": "5a8b0274eacf2e966d941aa8",
    "isActive": false,
    "name": "Mollie Vasquez",
    "email": "mollievasquez@hopeli.com"
  },
  {
    "id": "5a8b027483afc1a6282f4b33",
    "isActive": false,
    "name": "Mcdowell Palmer",
    "email": "mcdowellpalmer@hopeli.com"
  },
  {
    "id": "5a8b02745f6f443ddfe69927",
    "isActive": true,
    "name": "Parker Nielsen",
    "email": "parkernielsen@hopeli.com"
  },
  {
    "id": "5a8b02746bc27f906ed2b8c1",
    "isActive": false,
    "name": "Park Dotson",
    "email": "parkdotson@hopeli.com"
  },
  {
    "id": "5a8b0274f953432f72cce713",
    "isActive": true,
    "name": "Wilkins Hines",
    "email": "wilkinshines@hopeli.com"
  },
  {
    "id": "5a8b027482241c860cc80930",
    "isActive": false,
    "name": "Martha Burgess",
    "email": "marthaburgess@hopeli.com"
  },
  {
    "id": "5a8b0274255ec040f7f5bcf5",
    "isActive": true,
    "name": "Hallie Matthews",
    "email": "halliematthews@hopeli.com"
  },
  {
    "id": "5a8b027485018b93906b26d5",
    "isActive": false,
    "name": "Sosa Padilla",
    "email": "sosapadilla@hopeli.com"
  },
  {
    "id": "5a8b0274bebcd253c42add1e",
    "isActive": true,
    "name": "Effie Johnson",
    "email": "effiejohnson@hopeli.com"
  },
  {
    "id": "5a8b0274ac937b49e4158b18",
    "isActive": false,
    "name": "Harmon Guerra",
    "email": "harmonguerra@hopeli.com"
  },
  {
    "id": "5a8b02743b0473c0a5435d86",
    "isActive": false,
    "name": "Rush Beard",
    "email": "rushbeard@hopeli.com"
  },
  {
    "id": "5a8b0274d9abbe4cc3362489",
    "isActive": false,
    "name": "Pamela Swanson",
    "email": "pamelaswanson@hopeli.com"
  },
  {
    "id": "5a8b027499574a84b4da9b49",
    "isActive": false,
    "name": "Rivas Burris",
    "email": "rivasburris@hopeli.com"
  },
  {
    "id": "5a8b02748c1139bbed483b51",
    "isActive": true,
    "name": "Nguyen Oneil",
    "email": "nguyenoneil@hopeli.com"
  },
  {
    "id": "5a8b0274b718ab1942fa168a",
    "isActive": true,
    "name": "Sanchez Carver",
    "email": "sanchezcarver@hopeli.com"
  },
  {
    "id": "5a8b02741a7582d80dabd217",
    "isActive": false,
    "name": "Beard Townsend",
    "email": "beardtownsend@hopeli.com"
  },
  {
    "id": "5a8b02743caeb48f4ad6d93b",
    "isActive": false,
    "name": "Roach Dyer",
    "email": "roachdyer@hopeli.com"
  },
  {
    "id": "5a8b0274197d1937a4a12582",
    "isActive": false,
    "name": "Sallie Mosley",
    "email": "salliemosley@hopeli.com"
  },
  {
    "id": "5a8b0274c0261ab2199a2c31",
    "isActive": false,
    "name": "Ruiz Bell",
    "email": "ruizbell@hopeli.com"
  },
  {
    "id": "5a8b027457d3b0c16989fa86",
    "isActive": true,
    "name": "Eileen Leach",
    "email": "eileenleach@hopeli.com"
  },
  {
    "id": "5a8b0274b80fc5b3a9e8c9b6",
    "isActive": false,
    "name": "Estes Carter",
    "email": "estescarter@hopeli.com"
  },
  {
    "id": "5a8b0274a2c289c3c89190d2",
    "isActive": false,
    "name": "Pugh Mueller",
    "email": "pughmueller@hopeli.com"
  },
  {
    "id": "5a8b0274b2051f1942827885",
    "isActive": false,
    "name": "Maria Herrera",
    "email": "mariaherrera@hopeli.com"
  },
  {
    "id": "5a8b027448899d8e2753c3a1",
    "isActive": false,
    "name": "Iris Puckett",
    "email": "irispuckett@hopeli.com"
  },
  {
    "id": "5a8b0274f65f7b66ee560329",
    "isActive": false,
    "name": "Herring Emerson",
    "email": "herringemerson@hopeli.com"
  },
  {
    "id": "5a8b0274b553e9f977e1c322",
    "isActive": false,
    "name": "Bowen Ballard",
    "email": "bowenballard@hopeli.com"
  },
  {
    "id": "5a8b027481bbb8119c12aba3",
    "isActive": true,
    "name": "Ashley Beasley",
    "email": "ashleybeasley@hopeli.com"
  },
  {
    "id": "5a8b027408bcf7235648fc73",
    "isActive": false,
    "name": "Hunter Avery",
    "email": "hunteravery@hopeli.com"
  },
  {
    "id": "5a8b027430b36ecbf98a459f",
    "isActive": true,
    "name": "Rosanne Giles",
    "email": "rosannegiles@hopeli.com"
  },
  {
    "id": "5a8b0274a5f133b1473766ae",
    "isActive": true,
    "name": "Jacqueline Holt",
    "email": "jacquelineholt@hopeli.com"
  },
  {
    "id": "5a8b0274f5139495ce0a79ec",
    "isActive": true,
    "name": "Whitfield Cooley",
    "email": "whitfieldcooley@hopeli.com"
  },
  {
    "id": "5a8b0274f953a2700f8503ed",
    "isActive": false,
    "name": "Glenn Greene",
    "email": "glenngreene@hopeli.com"
  },
  {
    "id": "5a8b0274528652474dfc1fd7",
    "isActive": true,
    "name": "Sabrina Nash",
    "email": "sabrinanash@hopeli.com"
  },
  {
    "id": "5a8b0274f98035e265970ecd",
    "isActive": false,
    "name": "Sonja Eaton",
    "email": "sonjaeaton@hopeli.com"
  },
  {
    "id": "5a8b0274429799d59d244159",
    "isActive": true,
    "name": "Chaney Lawrence",
    "email": "chaneylawrence@hopeli.com"
  },
  {
    "id": "5a8b02749bec01710ad4dcad",
    "isActive": false,
    "name": "Vincent Ortiz",
    "email": "vincentortiz@hopeli.com"
  },
  {
    "id": "5a8b02745878ad0381a4a0b6",
    "isActive": false,
    "name": "Kelly Blair",
    "email": "kellyblair@hopeli.com"
  },
  {
    "id": "5a8b02744aaa4e788d754b28",
    "isActive": true,
    "name": "Diane Lyons",
    "email": "dianelyons@hopeli.com"
  },
  {
    "id": "5a8b0274ecdd5eb98a8c2500",
    "isActive": false,
    "name": "Bridges Hampton",
    "email": "bridgeshampton@hopeli.com"
  },
  {
    "id": "5a8b0274a02871d25a861189",
    "isActive": false,
    "name": "Evans Sexton",
    "email": "evanssexton@hopeli.com"
  },
  {
    "id": "5a8b0274499e1af074689cd6",
    "isActive": true,
    "name": "Katy Stephens",
    "email": "katystephens@hopeli.com"
  },
  {
    "id": "5a8b027462aec78929d5b92a",
    "isActive": true,
    "name": "Terry Church",
    "email": "terrychurch@hopeli.com"
  },
  {
    "id": "5a8b0274a38ba6f62f60fb5e",
    "isActive": false,
    "name": "Tricia Barlow",
    "email": "triciabarlow@hopeli.com"
  },
  {
    "id": "5a8b0274906fc87d7f3ca3c1",
    "isActive": false,
    "name": "Amanda Baxter",
    "email": "amandabaxter@hopeli.com"
  },
  {
    "id": "5a8b02743099c1cbd8ae6ae6",
    "isActive": false,
    "name": "Sandoval Watkins",
    "email": "sandovalwatkins@hopeli.com"
  },
  {
    "id": "5a8b0274933c5aa8ebddbc63",
    "isActive": true,
    "name": "Mullins Black",
    "email": "mullinsblack@hopeli.com"
  },
  {
    "id": "5a8b027486c95963aa5473cf",
    "isActive": true,
    "name": "Hale Webster",
    "email": "halewebster@hopeli.com"
  },
  {
    "id": "5a8b027480a16df37586c926",
    "isActive": false,
    "name": "Mendoza Franks",
    "email": "mendozafranks@hopeli.com"
  },
  {
    "id": "5a8b0274398c99275baf130d",
    "isActive": false,
    "name": "Byrd Monroe",
    "email": "byrdmonroe@hopeli.com"
  },
  {
    "id": "5a8b02749bfd437fd81d0b2b",
    "isActive": false,
    "name": "Nichole Pacheco",
    "email": "nicholepacheco@hopeli.com"
  },
  {
    "id": "5a8b02743f8e1f075c96db74",
    "isActive": true,
    "name": "Witt Donovan",
    "email": "wittdonovan@hopeli.com"
  },
  {
    "id": "5a8b0274930cd7a2d4c903e1",
    "isActive": true,
    "name": "Luann Horton",
    "email": "luannhorton@hopeli.com"
  },
  {
    "id": "5a8b0274f6af9baaeef8a12a",
    "isActive": true,
    "name": "Clare Luna",
    "email": "clareluna@hopeli.com"
  },
  {
    "id": "5a8b0274ba65f9aa890b31a7",
    "isActive": true,
    "name": "Claudia Slater",
    "email": "claudiaslater@hopeli.com"
  },
  {
    "id": "5a8b0274464f35e1bbf1f795",
    "isActive": true,
    "name": "Mcmahon Reynolds",
    "email": "mcmahonreynolds@hopeli.com"
  },
  {
    "id": "5a8b02747b3003a33793083f",
    "isActive": true,
    "name": "Bright Frye",
    "email": "brightfrye@hopeli.com"
  },
  {
    "id": "5a8b0274584e2ec1470d4578",
    "isActive": false,
    "name": "Ofelia Cochran",
    "email": "ofeliacochran@hopeli.com"
  },
  {
    "id": "5a8b027433c477b58fdda783",
    "isActive": true,
    "name": "Essie Nunez",
    "email": "essienunez@hopeli.com"
  },
  {
    "id": "5a8b02748c86bf41ffe6f7b8",
    "isActive": false,
    "name": "Howe Petty",
    "email": "howepetty@hopeli.com"
  },
  {
    "id": "5a8b0274f0102da1017ce576",
    "isActive": true,
    "name": "Conner Miller",
    "email": "connermiller@hopeli.com"
  },
  {
    "id": "5a8b0274d1cd1949bf55b036",
    "isActive": false,
    "name": "Glover Park",
    "email": "gloverpark@hopeli.com"
  },
  {
    "id": "5a8b027473682d904b7151a3",
    "isActive": false,
    "name": "Flores Rosario",
    "email": "floresrosario@hopeli.com"
  },
  {
    "id": "5a8b0274545cbbac56e5d09e",
    "isActive": true,
    "name": "Terra Freeman",
    "email": "terrafreeman@hopeli.com"
  },
  {
    "id": "5a8b027434ddf23eda4919b8",
    "isActive": true,
    "name": "Deleon Roman",
    "email": "deleonroman@hopeli.com"
  },
  {
    "id": "5a8b02747758b647896ef772",
    "isActive": false,
    "name": "Constance Berger",
    "email": "constanceberger@hopeli.com"
  },
  {
    "id": "5a8b0274187d8fc496f5bcd9",
    "isActive": false,
    "name": "Florine Kirk",
    "email": "florinekirk@hopeli.com"
  },
  {
    "id": "5a8b0274fc4016bcec5df64d",
    "isActive": true,
    "name": "Frank Levine",
    "email": "franklevine@hopeli.com"
  },
  {
    "id": "5a8b0274d77ee94941b55689",
    "isActive": true,
    "name": "Clayton Hebert",
    "email": "claytonhebert@hopeli.com"
  },
  {
    "id": "5a8b0274069bcbd354c37657",
    "isActive": false,
    "name": "Blanche Howard",
    "email": "blanchehoward@hopeli.com"
  },
  {
    "id": "5a8b02743d1eedf3dd98ccb6",
    "isActive": false,
    "name": "Holder Wilkerson",
    "email": "holderwilkerson@hopeli.com"
  },
  {
    "id": "5a8b0274c3888555b0c7e223",
    "isActive": true,
    "name": "Miller Randall",
    "email": "millerrandall@hopeli.com"
  },
  {
    "id": "5a8b02749db6694fd59ff61e",
    "isActive": false,
    "name": "Karina Perez",
    "email": "karinaperez@hopeli.com"
  },
  {
    "id": "5a8b02741af3be2843237648",
    "isActive": true,
    "name": "Bryan Hensley",
    "email": "bryanhensley@hopeli.com"
  },
  {
    "id": "5a8b0274e38222ca05908e42",
    "isActive": false,
    "name": "Pratt Hardy",
    "email": "pratthardy@hopeli.com"
  },
  {
    "id": "5a8b0274e0295be7162109d5",
    "isActive": false,
    "name": "Rosalind Lloyd",
    "email": "rosalindlloyd@hopeli.com"
  },
  {
    "id": "5a8b02740c554dee927cd153",
    "isActive": true,
    "name": "Cantrell Cooper",
    "email": "cantrellcooper@hopeli.com"
  },
  {
    "id": "5a8b0274095c13af50159205",
    "isActive": true,
    "name": "Greta Santana",
    "email": "gretasantana@hopeli.com"
  }
];

return {users};


  }
}
