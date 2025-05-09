
import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Filter, MapPin, Search, Sliders, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { trips } from "@/data/trips";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialDestination = queryParams.get("destination") || "";

  const [searchTerm, setSearchTerm] = useState(initialDestination);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [duration, setDuration] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("price-low");
  const [loading, setLoading] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Extract the numeric part of the duration string
  const extractDurationDays = (durationStr: string): number => {
    const match = durationStr.match(/(\d+)/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // Filter and sort trips based on criteria
  const filteredTrips = useMemo(() => {
    return trips
      .filter((trip) => {
        // Filter by search term (destination or location)
        const matchesSearch =
          searchTerm === "" ||
          trip.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
          trip.location.toLowerCase().includes(searchTerm.toLowerCase());

        // Filter by price range
        const price = Number(trip.price);
        const matchesPrice = price >= priceRange[0] && price <= priceRange[1];

        // Filter by duration
        let matchesDuration = true;
        if (duration) {
          const tripDays = extractDurationDays(trip.duration);
          
          switch (duration) {
            case "short":
              matchesDuration = tripDays <= 3;
              break;
            case "medium":
              matchesDuration = tripDays > 3 && tripDays <= 7;
              break;
            case "long":
              matchesDuration = tripDays > 7;
              break;
            default:
              matchesDuration = true;
          }
        }

        return matchesSearch && matchesPrice && matchesDuration;
      })
      .sort((a, b) => {
        // Sort based on selected criteria
        switch (sortBy) {
          case "price-low":
            return Number(a.price) - Number(b.price);
          case "price-high":
            return Number(b.price) - Number(a.price);
          case "rating":
            return b.rating - a.rating;
          case "duration-short":
            return extractDurationDays(a.duration) - extractDurationDays(b.duration);
          case "duration-long":
            return extractDurationDays(b.duration) - extractDurationDays(a.duration);
          default:
            return 0;
        }
      });
  }, [searchTerm, priceRange, duration, sortBy]);

  // Get current page items
  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredTrips.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredTrips, currentPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredTrips.length / itemsPerPage);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Update search filters
  };

  const handleReset = () => {
    setSearchTerm("");
    setPriceRange([0, 5000]);
    setDuration("");
    setSortBy("price-low");
  };

  // Generate pagination items
  const renderPaginationItems = () => {
    const items = [];
    
    for (let i = 1; i <= Math.min(totalPages, 5); i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink 
            isActive={currentPage === i} 
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    if (totalPages > 5) {
      items.push(
        <PaginationItem key="ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
      
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink 
            isActive={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return items;
  };

  return (
    <Layout>
      {/* Search Header */}
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 text-foreground"
              />
            </div>
            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <Filter className="h-4 w-4 mr-2" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filter Trips</SheetTitle>
                </SheetHeader>
                <div className="py-4 space-y-6">
                  {/* Mobile Filters */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="mobile-price-range">Price Range</Label>
                      <div className="pt-4 px-2">
                        <Slider
                          id="mobile-price-range"
                          defaultValue={priceRange}
                          min={0}
                          max={5000}
                          step={100}
                          value={priceRange}
                          onValueChange={setPriceRange}
                          className="mb-6"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>${priceRange[0]}</span>
                          <span>${priceRange[1]}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label>Duration</Label>
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <Button
                          variant={duration === "short" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setDuration("short")}
                          className="w-full"
                        >
                          Short (1-3 days)
                        </Button>
                        <Button
                          variant={duration === "medium" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setDuration("medium")}
                          className="w-full"
                        >
                          Medium (4-7 days)
                        </Button>
                        <Button
                          variant={duration === "long" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setDuration("long")}
                          className="w-full"
                        >
                          Long (7+ days)
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="mobile-sort">Sort By</Label>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger id="mobile-sort" className="mt-2">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="price-low">Price: Low to High</SelectItem>
                          <SelectItem value="price-high">Price: High to Low</SelectItem>
                          <SelectItem value="rating">Rating</SelectItem>
                          <SelectItem value="duration-short">Duration: Shortest First</SelectItem>
                          <SelectItem value="duration-long">Duration: Longest First</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button onClick={handleReset} variant="outline" className="flex-1">
                      Reset
                    </Button>
                    <Button onClick={() => setFiltersOpen(false)} className="flex-1">
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="md:w-1/4 shrink-0 hidden md:block">
            <div className="sticky top-24 glass-card rounded-xl p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Sliders className="h-5 w-5 mr-2" /> Filters
                </h3>
                <Button onClick={handleReset} variant="ghost" size="sm" className="mb-4">
                  Reset All
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price-range">Price Range</Label>
                <div className="pt-4 px-2">
                  <Slider
                    id="price-range"
                    defaultValue={priceRange}
                    min={0}
                    max={5000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-6"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Duration</Label>
                <div className="space-y-2 pt-2">
                  <Button
                    variant={duration === "short" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDuration(duration === "short" ? "" : "short")}
                    className="w-full justify-start"
                  >
                    {duration === "short" && <Check className="h-4 w-4 mr-2" />}
                    Short (1-3 days)
                  </Button>
                  <Button
                    variant={duration === "medium" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDuration(duration === "medium" ? "" : "medium")}
                    className="w-full justify-start"
                  >
                    {duration === "medium" && <Check className="h-4 w-4 mr-2" />}
                    Medium (4-7 days)
                  </Button>
                  <Button
                    variant={duration === "long" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDuration(duration === "long" ? "" : "long")}
                    className="w-full justify-start"
                  >
                    {duration === "long" && <Check className="h-4 w-4 mr-2" />}
                    Long (7+ days)
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sort-by">Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort-by" className="mt-2">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="duration-short">Duration: Shortest First</SelectItem>
                    <SelectItem value="duration-long">Duration: Longest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="md:w-3/4">
            <div className="mb-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">
                {loading
                  ? "Loading trips..."
                  : `${filteredTrips.length} trips found`}
              </h1>
              <div className="hidden md:block">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="duration-short">Duration: Shortest First</SelectItem>
                    <SelectItem value="duration-long">Duration: Longest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {loading ? (
              // Loading skeletons
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="animate-pulse">
                    <div className="bg-muted h-48 rounded-t-xl"></div>
                    <div className="p-4 space-y-3 bg-card rounded-b-xl">
                      <div className="h-6 bg-muted rounded w-3/4"></div>
                      <div className="h-4 bg-muted rounded w-1/2"></div>
                      <div className="h-4 bg-muted rounded w-full"></div>
                      <div className="flex justify-between pt-2">
                        <div className="h-6 bg-muted rounded w-1/4"></div>
                        <div className="h-6 bg-muted rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredTrips.length > 0 ? (
              // Results grid
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentItems.map((trip) => (
                    <Link
                      to={`/trips/${trip.id}`}
                      key={trip.id}
                      className="block group"
                    >
                      <div className="glass-card rounded-xl overflow-hidden shadow-lg hover-scale">
                        <div className="relative h-48">
                          <img
                            src={trip.thumbnailUrl || trip.images[0]}
                            alt={trip.destination}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                            {trip.destination}
                          </h3>
                          <div className="flex items-center mb-2">
                            <MapPin className="w-4 h-4 text-muted-foreground mr-1" />
                            <span className="text-sm text-muted-foreground">
                              {trip.location}
                            </span>
                          </div>
                          <div className="flex items-center mb-3">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                            <span className="mr-1">{trip.rating}</span>
                            <span className="text-sm text-muted-foreground">
                              ({trip.ratingCount} reviews)
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-lg font-bold">
                              ${trip.price}
                              <span className="text-sm font-normal text-muted-foreground">
                                {" "}
                                / person
                              </span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {trip.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination className="mt-8">
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                          />
                        </PaginationItem>
                      )}
                      
                      {renderPaginationItems()}
                      
                      {currentPage < totalPages && (
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                          />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                )}
              </>
            ) : (
              // No results
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 mb-4 text-muted-foreground">
                  <Search className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold mb-2">No trips found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search filters
                </p>
                <Button onClick={handleReset}>Reset Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

// PaginationEllipsis component
const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className="flex h-9 w-9 items-center justify-center"
    {...props}
  >
    <span className="text-lg">...</span>
    <span className="sr-only">More pages</span>
  </span>
);

export default SearchResults;

