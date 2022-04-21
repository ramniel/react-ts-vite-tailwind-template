import NavBar from '~/components/shared/NavBar';
import NavItem from '~/components/shared/NavItem';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Example', href: '/example' },
];

export default function Nav() {
  return (
    <NavBar>
      {navigation.map((item) => (
        <NavItem key={item.name} href={item.href}>
          {item.name}
        </NavItem>
      ))}
    </NavBar>
  );
}
