  // Sorts the sorted games state when given a filter string from recommendations filter. 

  export const sortGames = (selectedFilter, boardGames, setSortedGames) => {

    let sorted = []
    const types = {
        minPlayersAsc   : 'minPlayers',
        maxPlayersAsc   : 'maxPlayers',
        maxPlayTimeAsc  : 'maxPlayTime',
        categoryAsc     : `gameCategory[0]['name]`,
        minPlayersDesc  : 'minPlayers', 
        maxPlayersDesc  : 'maxPlayers',
        maxPlayTimeDesc : 'maxPlayTime',
        rankAsc         : 'rank'
    }
    if(selectedFilter === 'minPlayersAsc'|| selectedFilter === 'maxPlayersAsc'
      || selectedFilter === 'maxPlayTimeAsc' || selectedFilter === 'categoryAsc' || 
      selectedFilter === 'rankAsc') {
        const sortProperty = types[selectedFilter];
        sorted = [...boardGames].sort((a, b) => a[sortProperty] - b[sortProperty]);
    } else if (selectedFilter === 'minPlayersDesc'|| selectedFilter === 'maxPlayersDesc' 
              || selectedFilter === 'maxPlayTimeDesc') {
        const sortProperty = types[selectedFilter];
        sorted = [...boardGames].sort((a, b) => b[sortProperty] - a[sortProperty]);
    } else if (!selectedFilter) {
      return
    }
    setSortedGames(sorted);

  }