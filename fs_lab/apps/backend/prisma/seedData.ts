// Default data used by prisma/seed.ts to fill the database.
// Edit these arrays, then run `npx prisma db seed` to reload the data.

type EmployeeSeed = {
  firstName: string;
  lastName?: string;
};

type DepartmentSeed = {
  name: string;
  employees: EmployeeSeed[];
};

type RoleSeed = {
  role: string;
  firstName: string;
  lastName?: string;
  pronouns?: string;
};

export const departmentSeedData: DepartmentSeed[] = [
  {
    name: "Administration",
    employees: [
      { firstName: "Zoë", lastName: "Robins" },
      { firstName: "Madeleine", lastName: "Madden" },
    ],
  },
  {
    name: "Audit",
    employees: [
      { firstName: "Josha", lastName: "Sadowski" },
      { firstName: "Kate", lastName: "Fleetwood" },
    ],
  },
  {
    name: "Banking Operations",
    employees: [
      { firstName: "Priyanka", lastName: "Bose" },
      { firstName: "Hammed", lastName: "Animashaun" },
      { firstName: "Álvaro", lastName: "Morte" },
      { firstName: "Taylor", lastName: "Napier" },
      { firstName: "Alan", lastName: "Simmonds" },
    ],
  },
  {
    name: "Communications",
    employees: [
      { firstName: "Gil", lastName: "Cardinal" },
      { firstName: "Richard J.", lastName: "Lewis" },
    ],
  },
  {
    name: "Corporate Services",
    employees: [
      { firstName: "Randy", lastName: "Bradshaw" },
      { firstName: "Tracey", lastName: "Cook" },
      { firstName: "Lubomir", lastName: "Mykytiuk" },
    ],
  },
  {
    name: "Facilities",
    employees: [
      { firstName: "Dakota", lastName: "House" },
      { firstName: "Lori Lea", lastName: "Okemah" },
      { firstName: "Renae", lastName: "Morrisseau" },
      { firstName: "Rick", lastName: "Belcourt" },
    ],
  },
  {
    name: "Financial Services",
    employees: [
      { firstName: "Selina", lastName: "Hanusa" },
      { firstName: "Buffy", lastName: "Gaudry" },
      { firstName: "Shaneen Ann", lastName: "Fox" },
      { firstName: "Allan", lastName: "Little" },
      { firstName: "Danny", lastName: "Rabbit" },
    ],
  },
  {
    name: "Human Resources",
    employees: [
      { firstName: "Jesse Ed", lastName: "Azure" },
      { firstName: "Stacy", lastName: "Da Silva" },
      { firstName: "Vladimír", lastName: "Valenta" },
      { firstName: "Samone", lastName: "Sayeses-Whitney" },
      { firstName: "Paul", lastName: "Coeur" },
    ],
  },
  {
    name: "Information Technology",
    employees: [
      { firstName: "Graham", lastName: "Greene" },
      { firstName: "Sandika", lastName: "Evergreen" },
      { firstName: "Jennifer", lastName: "Rodriguez" },
    ],
  },
  {
    name: "IT Technician",
    employees: [
      { firstName: "Aiyana", lastName: "Littlebear" },
      { firstName: "Inara", lastName: "Thunderbird" },
      { firstName: "Kaya", lastName: "Runningbrook" },
      { firstName: "Elara", lastName: "Firehawk" },
      { firstName: "Siona", lastName: "Moonflower" },
      { firstName: "Kaiyu", lastName: "Greywolf" },
      { firstName: "Ayawamat", lastName: "Nightwind" },
      { firstName: "Tala", lastName: "Braveheart" },
      { firstName: "Iniko", lastName: "Stonebear" },
      { firstName: "Onatah", lastName: "Redhawk" },
    ],
  },
];

export const roleSeedData: RoleSeed[] = [
  { role: "CEO/Chair of Board", firstName: "Jo-Anne", lastName: "Sinclair" },
  { role: "COO/VP Operations", firstName: "Jackson", lastName: "Smith" },
  { role: "CFO/VP Administration", firstName: "Susan", lastName: "Thomas" },
  { role: "VP Client Services", firstName: "Richa", lastName: "Kaur" },
  { role: "CIO", firstName: "Josee", lastName: "Benjamin" },
  { role: "VP Sales & Marketing", firstName: "Vincent", lastName: "Grey" },
  {
    role: "Director Financial and Audit Svcs",
    firstName: "Rupa",
    lastName: "Kharki",
    pronouns: "she/her/hers",
  },
  { role: "Director Human Resources", firstName: "Xun", lastName: "Kuang" },
  {
    role: "Director Legal Services/General Counsel",
    firstName: "Stien",
    lastName: "Pedersen",
  },
  { role: "Director Information Technology", firstName: "Sandra", lastName: "Bear" },
  {
    role: "Director Information Security and CISSO",
    firstName: "Gus",
    lastName: "Blue",
  },
  { role: "Director Accounting", firstName: "Sam", lastName: "Kong" },
  { role: "Director Physical Security", firstName: "Valentine", lastName: "Smith" },
  { role: "Director Facilities", firstName: "Mariya", lastName: "Kaperski" },
  {
    role: "Manager, Business Continuity and Disaster Recovery",
    firstName: "Abd al-Hamid",
    lastName: "Alami",
  },
  { role: "Manager, Internal Audit", firstName: "Victoria", lastName: "Gray" },
  { role: "Chief Architect", firstName: "Cheryl", lastName: "Guru" },
  { role: "Manager, Security Architecture", firstName: "Jean", lastName: "Ngoy" },
  { role: "Solution Architect, Online Banking", firstName: "Kris", lastName: "Gold" },
  { role: "Manager, Application Solutions", firstName: "Isaac", lastName: "Smith" },
  { role: "Lead Developer, Online Banking", firstName: "Payton", lastName: "Frost" },
  { role: "Manager, Operational Risk", firstName: "Samantha", lastName: "Nettle" },
  { role: "Manager, Vendor Relations", firstName: "Yolanda", lastName: "Ferreira" },
  { role: "Manager, Purchasing", firstName: "Samir", lastName: "Hassan" },
  { role: "Manager, Communications", firstName: "Yuna", lastName: "Aikawa" },
  {
    role: "Manager Customer Experience and Community Eng.",
    firstName: "Jonathan",
    lastName: "Carberry",
  },
  { role: "Manager of Sales", firstName: "Roland", lastName: "Wei" },
  { role: "Manager, Marketing", firstName: "Pran", lastName: "Singh" },
  {
    role: "Business Analyst, Online Banking",
    firstName: "Linda",
    lastName: "Analyst",
  },
  { role: "Manager, Contract Management", firstName: "Esra", lastName: "Sedge" },
  { role: "Manager, Compliance Management", firstName: "Pranee", lastName: "Tan" },
  {
    role: "Manager IT End User Service Desk",
    firstName: "Karmen",
    lastName: "Spruce",
  },
  { role: "Manager IT End User Computing", firstName: "Haydar", lastName: "Katirci" },
  {
    role: "Manager IT Telecom and Infrastructure",
    firstName: "Jill",
    lastName: "Harkness",
  },
  {
    role: "Manager, Data Center and Hosting Services",
    firstName: "Tim",
    lastName: "Morrison",
  },
  {
    role: "Manager of IT Risk Management",
    firstName: "Aleksandr",
    lastName: "Milosevic",
  },
  {
    role: "Manager IT, project management office",
    firstName: "Jim",
    lastName: "Wingnut",
  },
];
