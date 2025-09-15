import { Heart, Brain, BookOpen, Wind, Users, Star, Shield, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface WelcomeScreenProps {
  onStartChat: () => void;
}

const WelcomeScreen = ({ onStartChat }: WelcomeScreenProps) => {
  const features = [
    {
      icon: Heart,
      title: "Anxiety Relief",
      description: "I'm feeling anxious",
      color: "text-red-400"
    },
    {
      icon: Brain,
      title: "Motivation Boost", 
      description: "Need motivation",
      color: "text-blue-400"
    },
    {
      icon: BookOpen,
      title: "Mood Tracking",
      description: "Track emotions daily", 
      color: "text-green-400"
    },
    {
      icon: Wind,
      title: "Breathing Exercises",
      description: "Calm your mind",
      color: "text-cyan-400"
    },
    {
      icon: Users,
      title: "Self-Reflection",
      description: "Journal your thoughts",
      color: "text-purple-400"
    }
  ];

  const benefits = [
    {
      icon: MessageCircle,
      title: "Personalized AI Support",
      description: "Tailored conversations that understand your unique needs"
    },
    {
      icon: Shield,
      title: "No judgment, just care",
      description: "A safe space where you can be completely yourself"
    },
    {
      icon: Clock,
      title: "24/7 availability",
      description: "Support whenever you need it, day or night"
    }
  ];

  const testimonials = [
    {
      name: "Alex M.",
      avatar: "A",
      quote: "SafeSpace helped me through my toughest days. Having someone to talk to anytime made all the difference.",
      rating: 5
    },
    {
      name: "Jordan K.", 
      avatar: "J",
      quote: "The mood tracking feature really opened my eyes to patterns I never noticed. It's like having a wellness coach in my pocket.",
      rating: 5
    },
    {
      name: "Sam T.",
      avatar: "S", 
      quote: "Finally, mental health support that doesn't feel clinical or scary. Just genuine care and understanding.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                Let's make your mental wellness a{' '}
                <span className="text-primary">Reality.</span>
                <br />
                Right now.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Your AI companion for mental wellness. Chat, reflect, and grow with personalized support designed just for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={onStartChat}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-full px-8 py-4 text-lg font-semibold transition-all duration-200 hover:shadow-xl hover:scale-105"
                >
                  Chat Now
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-4 text-lg font-semibold transition-all duration-200 hover:shadow-lg"
                >
                  Try Demo
                </Button>
              </div>
            </div>

            {/* Right Content - 3D Model Area */}
            <div className="flex justify-center">
              <div className="w-full max-w-md h-96 bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30 shadow-xl flex items-center justify-center">
                <iframe 
                  src="https://my.spline.design/webstackframertemplatebackground-lWQWWVivVihZCZJJvOT5iezC/" 
                  className="w-full h-full rounded-3xl"
                  frameBorder="0"
                  title="3D Wellness Model"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How can we help you today?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our wellness tools designed to support your mental health journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="group cursor-pointer bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20" style={{ background: "var(--gradient-card)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why choose SafeSpace?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg rounded-2xl">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What our community says
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories from people who found their safe space
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg rounded-2xl">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <div className="flex space-x-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div 
          className="h-1 w-full mb-16" 
          style={{ background: "var(--gradient-footer)" }}
        />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">SafeSpace</h3>
              <p className="text-background/70">Your AI wellness companion</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-background/70 hover:text-background transition-colors">About</a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">Contact</a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">Privacy Policy</a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">Community</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-background/70 hover:text-background transition-colors">Help Center</a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">Crisis Resources</a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">Feedback</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-background/70 hover:text-background transition-colors">Instagram</a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">Twitter</a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/70">
              © 2024 SafeSpace. All rights reserved. • Your AI wellness companion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomeScreen;