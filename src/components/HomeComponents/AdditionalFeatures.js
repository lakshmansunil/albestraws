import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

const AdditionalFeatures = () => {
  const features = [
    {
      icon: "🤖", // Replace with actual SVG or icon
      title: "Insights",
      description: "Your weekly dose of wit and humor with our Consultants.",
    },
    {
      icon: "❄️", // Replace with actual SVG or icon
      title: "Marketplace",
      description:
        "Our curated collection of solution accelerators helping us deliver better solutions faster.",
    },
    {
      icon: "📈", // Replace with actual SVG or icon
      title: "Evolve",
      description:
        "Stories of transformation, success, and failures that help us evolve.",
    },
  ];

  return (
    <div className="text-center my-10">
      <Typography variant="h5" className="mb-6">
        And, that’s not all
      </Typography>
      <div className="flex justify-center gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="w-72 shadow-lg">
            <CardBody className="flex flex-col items-center p-6">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <Typography variant="h6" className="text-blue-900">
                {feature.title}
              </Typography>
              <Typography className="text-sm text-gray-600 text-center mt-2">
                {feature.description}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <Button variant="outlined" color="blue">
          Subscribe now
        </Button>
      </div>
    </div>
  );
};

export default AdditionalFeatures;
