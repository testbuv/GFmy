export function calculateAvailableCredits(userCredits: number, creationCount: number): number {
    return userCredits - creationCount;
  }