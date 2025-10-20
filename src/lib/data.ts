export type Claim = { id:string; text:string; entity?:string; firstSeenAt?:string;
    status:'PENDING'|'SUPPORTED'|'REFUTED'|'NEEDS_REVIEW';
    sources:{ id:string; url:string; title?:string; excerpt?:string; publishedAt?:string }[];
    modelVerdicts:{ label:string; confidence:number }[];
    humanVerdicts:{ user:string; label:string; notes?:string; createdAt:string }[];
  }
  
  const CLAIMS: Claim[] = [ /* …mock objects… */ ]
  
  export const getClaim = (id:string) => CLAIMS.find(c => c.id === id)
  export const getClaims = () => CLAIMS
  