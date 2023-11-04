import { $searched, $results } from "../scripts/state.js";

$searched.set(true);
$results.set(getJSON());

function getJSON() {
  return [
    {
      email: "Alexandre.Boulerice@parl.gc.ca",
      personal_url: "",
      elected_office: "MP",
      representative_set_name: "House of Commons",
      name: "Alexandre Boulerice",
      photo_url:
        "https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/44/BoulericeAlexandre_NDP.jpg",
      extra: {
        preferred_languages: ["French"],
      },
      district_name: "Rosemont—La Petite-Patrie",
      party_name: "NDP",
      last_name: "Boulerice",
      url: "https://www.ourcommons.ca/Members/en/alexandre-boulerice(58775)",
      first_name: "Alexandre",
      source_url:
        "https://www.ourcommons.ca/Members/en/search?caucusId=all&province=all",
      related: {
        boundary_url: "/boundaries/federal-electoral-districts/24064/",
        representative_set_url: "/representative-sets/house-of-commons/",
      },
      offices: [
        {
          fax: "1 613 992-0423",
          tel: "1 613 992-0423",
          type: "legislature",
          postal: "House of Commons\nOttawa ON  K1A 0A6",
        },
        {
          fax: "1 514 729-5875",
          tel: "1 514 729-5342",
          type: "constituency",
          postal:
            "Main office - Montréal\n208-1453 Beaubien Street East\nMontréal QC  H2G 3C6",
        },
      ],
      gender: "M",
    },
    {
      email: "valerie.plante@ville.montreal.qc.ca",
      personal_url: "",
      elected_office: "Maire de la Ville de Montréal",
      representative_set_name: "Conseil municipal de Montréal",
      name: "Valérie Plante",
      photo_url:
        "http://ville.montreal.qc.ca/pls/portal/docs/PAGE/COLLECTIONS_GENERALES/MEDIA/Images/Public/mi_plante_valerie.jpg",
      extra: {},
      district_name: "Montréal",
      party_name: "Projet Montréal - Équipe Valérie Plante",
      last_name: "Plante",
      url: "http://ville.montreal.qc.ca/portal/page?_pageid=5798,85809754&_dad=portal&_schema=PORTAL&id=142239476",
      first_name: "Valérie",
      source_url:
        "http://donnees.ville.montreal.qc.ca/dataset/381d74ca-dadd-459f-95c9-db255b5f4480/resource/ce1315a3-50ee-48d0-a0f0-9bcc15f65643/download/listeelusmontreal.csv",
      related: {
        boundary_url: "/boundaries/census-subdivisions/2466023/",
        representative_set_url:
          "/representative-sets/conseil-municipal-de-montreal/",
      },
      offices: [],
      gender: "F",
    },
    {
      email: "francois.limoges@ville.montreal.qc.ca",
      personal_url: "",
      elected_office: "Conseiller de la ville",
      representative_set_name: "Conseil municipal de Montréal",
      name: "François Limoges",
      photo_url:
        "http://ville.montreal.qc.ca/pls/portal/docs/PAGE/COLLECTIONS_GENERALES/MEDIA/Images/Public/mi_limoges_francois.JPG",
      extra: {},
      district_name: "Saint-Édouard",
      party_name: "Projet Montréal - Équipe Valérie Plante",
      last_name: "Limoges",
      url: "http://ville.montreal.qc.ca/portal/page?_pageid=5798,85809754&_dad=portal&_schema=PORTAL&id=142239415",
      first_name: "François",
      source_url:
        "http://donnees.ville.montreal.qc.ca/dataset/381d74ca-dadd-459f-95c9-db255b5f4480/resource/ce1315a3-50ee-48d0-a0f0-9bcc15f65643/download/listeelusmontreal.csv",
      related: {
        boundary_url:
          "/boundaries/montreal-boroughs-and-districts/saint-edouard/",
        representative_set_url:
          "/representative-sets/conseil-municipal-de-montreal/",
      },
      offices: [
        {
          fax: "1 514 868-3932",
          tel: "1 514 872-8234",
          type: "legislature",
          postal: "5650, rue D'Iberville\n2e étage\nMontréal QC  H2G 2B3",
        },
      ],
      gender: "M",
    },
    {
      email: "francois.croteau@ville.montreal.qc.ca",
      personal_url: "",
      elected_office: "Maire d'arrondissement",
      representative_set_name: "Conseil municipal de Montréal",
      name: "François William Croteau",
      photo_url:
        "http://ville.montreal.qc.ca/pls/portal/docs/PAGE/COLLECTIONS_GENERALES/MEDIA/Images/Public/mi_francois_croteau.jpg",
      extra: {},
      district_name: "Rosemont—La Petite-Patrie",
      party_name: "Projet Montréal - Équipe Valérie Plante",
      last_name: "Croteau",
      url: "http://ville.montreal.qc.ca/portal/page?_pageid=5798,85809754&_dad=portal&_schema=PORTAL&id=142239412",
      first_name: "François William",
      source_url:
        "http://donnees.ville.montreal.qc.ca/dataset/381d74ca-dadd-459f-95c9-db255b5f4480/resource/ce1315a3-50ee-48d0-a0f0-9bcc15f65643/download/listeelusmontreal.csv",
      related: {
        boundary_url:
          "/boundaries/montreal-boroughs-and-districts/rosemont-la-petite-patrie/",
        representative_set_url:
          "/representative-sets/conseil-municipal-de-montreal/",
      },
      offices: [
        {
          fax: "1 514 868-3932",
          tel: "1 514 872-6473",
          type: "legislature",
          postal: "5650, rue D'Iberville\n2e étage\nMontréal QC  H2G 2B3",
        },
      ],
      gender: "M",
    },
  ];
}
