
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DocCategoryCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const DocCategoryCard: React.FC<DocCategoryCardProps> = ({ 
  title, 
  description, 
  icon, 
  link 
}) => {
  return (
    <Card className="h-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="text-4xl mb-4">{icon}</div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-end pt-4">
        <Button asChild>
          <Link to={link}>Browse Documentation</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default DocCategoryCard;
