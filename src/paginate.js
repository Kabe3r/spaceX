export const paginate = (capsules) => {
      const capsulesPerPage = 5;
      const numberOfPages = Math.ceil(capsules.length / capsulesPerPage);
    
      const newCapsules = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * capsulesPerPage
        return capsules.slice(start, start + capsulesPerPage)
      })
    
      return newCapsules;
}