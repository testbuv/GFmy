export function calculateAvailableCredits(userCredits: number, creationCount: number) {
  const creditsPerCreation = 200;
  const availableCredits = userCredits - (creationCount * creditsPerCreation);
  return availableCredits >= 0 ? availableCredits : 0;
}