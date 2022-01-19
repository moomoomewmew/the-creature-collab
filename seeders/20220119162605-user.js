'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'users',
      [
        {
          userName: 'FrodoBaggins',
          characterName: 'Frodo Baggins',
          city: 'The Shire',
          pronouns: 'he/him',
          characterClass: null,
          race: 'Hobbit',
          moralAlignment: null,
          bio: null,
          profilePic:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gElzfmsUQAU_HRns-NEpWQHaEK%26pid%3DApi&f=1',
          email: 'frodo@middleearth.com',
          passwordDigest:
            '$2b$12$6Gx5PUkkyeJq7nPC8IUAsu6AeG0HG/2MOhddvbVIGNvei/4p7eKpC',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'BilboBaggins',
          characterName: null,
          city: null,
          pronouns: 'he/him',
          characterClass: null,
          race: 'Hobbit',
          moralAlignment: null,
          bio: null,
          profilePic: null,
          email: 'bilbo@middleearth.com',
          passwordDigest:
            '$2b$12$JrxSsy794RbqoDLfHfdYtOr6B/ABruDT6qCukG/n1kVKw4Nk3xR1W',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'Gandalf',
          characterName: null,
          city: null,
          pronouns: 'he/him',
          characterClass: null,
          race: null,
          moralAlignment: null,
          bio: null,
          profilePic: null,
          email: 'gandalf@thegrey.com',
          passwordDigest:
            '$2b$12$uVnDtAw4XvZNri/D9CyegO3nMGki/03Nf0YkfNC3WkpeWJP0aC3vq',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'Aragorn',
          characterName: null,
          city: null,
          pronouns: 'he/him',
          characterClass: null,
          race: null,
          moralAlignment: null,
          bio: null,
          profilePic: null,
          email: 'aragorn@middleearth.com',
          passwordDigest:
            '$2b$12$kNkUB2ExcvXYRqx/V5bYmukU5GmOfjhUXpIonikpXkmyegi/S9Idm',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'Voice_of_the_Tempest',
          characterName: 'Keyleth',
          city: 'Lousiville, KY',
          pronouns: 'she/her',
          characterClass: 'Druid',
          race: 'Half-elf',
          moralAlignment: 'Neutral Good',
          bio: null,
          profilePic:
            'https://static.wikia.nocookie.net/criticalrole/images/c/c2/Keyleth2.png/revision/latest/scale-to-width-down/350?cb=20151228163618',
          email: 'keyleth@faker.com',
          passwordDigest:
            '$2b$12$E9.2ffAcNobxoJGndgKgPOsyMdrRWDQho1DmVG/lpsqDNeSIw3gM6',
          createdAt: '2022-01-19T16:08:11.609Z',
          updatedAt: '2022-01-19T16:21:32.898Z'
        },
        {
          userName: 'No_Mercy_Percy',
          characterName:
            'Percival Fredrickstein von Musel Klossoski de Rolo III',
          city: 'Los Angeles, CA',
          pronouns: 'he/him',
          characterClass: 'Fighter/Gunslinger',
          race: 'Human',
          moralAlignment: 'Neutral Good',
          bio: null,
          profilePic:
            'https://static.wikia.nocookie.net/criticalrole/images/9/91/Percy2.png/revision/latest/scale-to-width-down/350?cb=20151228164610',
          email: 'percy_de_rolo@faker.com',
          passwordDigest:
            '$2b$12$/AKROc1SjP.BeSEzZQ/wfufNEV0qcAKIzcSw5H/SVwn4FSSmEJmZK',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'Brawny_Berserker',
          characterName: 'Grog Strongjaw',
          city: 'Dallas, TX',
          pronouns: 'he/him',
          characterClass: 'Barbarian',
          race: 'Goliath',
          moralAlignment: 'Chaotic Neutral',
          bio: null,
          profilePic:
            'https://static.wikia.nocookie.net/criticalrole/images/4/45/Grog2.png/revision/latest/scale-to-width-down/350?cb=20151228165057',
          email: 'barbarian_berserker789@faker.com',
          passwordDigest:
            '$2b$12$2/G/h3/.BSJxl6DIW4F62ukLYqS/YaKjERlScWe3jqkz/tFln6KL.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('users', null, {});
  }
};
