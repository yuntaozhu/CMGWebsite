<script>
  import TeamCard from './TeamCard.svelte';
  import TeamTabs from './TeamTabs.svelte';
  // import DevelopersSection from './DevelopersSection.svelte';

  const teams = [
    // Define your teams here
    // Each team should have a name and description
    {
      name: "Executives Team",
      description: "Mga idolo ko ito na matatapang. Kaya isacrifice ang lahat para sa org "
    },
  ];

  const developersByTeam = [
    // Developers for Team 1
    [
      { name: 'John Doe', position: 'Software Engineer', imageSrc: 'john.jpg' },
      { name: 'Jane Smith', position: 'UI/UX Designer', imageSrc: 'jane.jpg' },
    ],

    // Developers for Team 2
    [
      { name: 'Michael Johnson', position: 'Front-end Developer', imageSrc: 'michael.jpg' },
      { name: 'Emily Brown', position: 'Back-end Developer', imageSrc: 'emily.jpg' },
    ],

    // Add more teams and developers as needed...
  ];

  let activeTeamIndex = 0;
</script>

<div class="container">
  <!-- ... -->
  <TeamCard teamName={teams[activeTeamIndex].name} description={teams[activeTeamIndex].description} />
  <!-- <TeamTabs activeTeamIndex={activeTeamIndex} teams={teams} /> -->
  <!-- <DevelopersSection teamName={teams[activeTeamIndex].name} developers={developersByTeam[activeTeamIndex]} /> -->
  <!-- ... -->
</div>
