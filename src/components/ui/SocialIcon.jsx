import { ChefHat, CodeXml, Github, Linkedin } from 'lucide-react';

const ICONS = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: CodeXml,
  CodeChef: ChefHat,
};

const SocialIcon = ({ label, className = 'h-4 w-4' }) => {
  const Icon = ICONS[label] ?? CodeXml;
  return <Icon aria-hidden="true" className={className} />;
};

export default SocialIcon;
