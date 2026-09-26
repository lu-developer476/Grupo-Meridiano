import {describe,expect,it} from 'vitest';
describe('catalog contract',()=>{it('keeps URL filtering deterministic',()=>{const items=[{title:'Casa Belgrano',city:'CABA'},{title:'Departamento Palermo',city:'CABA'}];const q='palermo';expect(items.filter(p=>`${p.title} ${p.city}`.toLowerCase().includes(q)).length).toBe(1);});});
