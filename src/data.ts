export type Lesson={id:string;studentAlias:string;startAt:string;durationMinutes:number;feeCents:number;currency:'EUR';status:'scheduled'|'completed'|'cancelled'};
export const names=['Mia Bennett','Noah Ellis','Lily Parker','Leo Martin','Emma Wilson','Oliver Reed','Sofia Hayes','Lucas Brooks'];
export function seed():Lesson[]{return Array.from({length:34},(_,i)=>{const day=i<28?1+i: i-27;const month=i<28?'10':'09';return {id:'demo-'+i,studentAlias:names[i%8],startAt:`2026-${month}-${String(day).padStart(2,'0')}T${i%2?'15':'14'}:00:00.000Z`,durationMinutes:i%5===0?50:25,feeCents:i%5===0?1000:500,currency:'EUR',status:i<18?(i%7===3?'cancelled':'completed'):'scheduled'};});}
const key='lessondesk-v1';
export async function request<T>(action:()=>T,mode:string):Promise<T>{await new Promise(r=>setTimeout(r,mode==='slow'?2200:300));if(mode==='error')throw new Error('The simulated request failed. Your changes have not been saved.');try{return action()}catch{throw new Error('Browser storage is unavailable or full. Your changes have not been saved.')}}
export function read():Lesson[]{const value=localStorage.getItem(key);if(value){const parsed=JSON.parse(value);if(!Array.isArray(parsed))throw new Error('Invalid saved data');return parsed;}return seed();}
export function persist(value:Lesson[]){localStorage.setItem(key,JSON.stringify(value));return value;}
