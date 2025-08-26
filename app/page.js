import Link from "next/link";

export default function Home() {
  let name = 'park'
  let age = 20
  let link = 'http://google.com'
  return (
    <div>
      <h4 className="title" style={{ color: 'red', fontSize: '24px' }}>애플후레쉬 {age}</h4>
      <p className="title-sub">by dev {name}</p>
      <a href={link}>구글링크</a>
    </div>
  );
}