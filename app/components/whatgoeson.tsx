import Image from "next/image";

export default function ExploreSection() {
  return (
    <section className="bg-black text-white p-6 lg:p-12">
      <div className="max-w-7xl mx-auto flex">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-left">
          Take a peep at <span className="text-red-500">what goes on</span> at
          Zelpinix!
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-2">
          {/* Row 1 */}
          <div className="col-span-6">
            <Image
              src="/careers/whatgoeson/first.png"
              alt="Team Working"
              width={300}
              height={200}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="col-span-6">
            <Image
              src="/careers/whatgoeson/second.png"
              alt="Team Member"
              width={300}
              height={200}
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 2 */}
          <div className="col-span-5">
            {/* First Fifth Image */}
            <Image
              src="/careers/whatgoeson/fifth.png"
              alt="Laughing Team"
              width={400}
              height={300}
              className="w-full h-[300px] object-cover rounded"
            />
          </div>
          <div className="col-span-7">
            <Image
              src="/careers/whatgoeson/fourth.png"
              alt="Tall Image"
              width={400}
              height={500}
              className="w-full h-[400px] object-cover rounded"
            />
          </div>

          {/* Row 3 */}
          <div className="col-span-5 ">
            <Image
              src="/careers/whatgoeson/fifth.png"
              alt="Laughing Team"
              width={400}
              height={300}
              className="w-full h-[200px] object-cover rounded"
            />
          </div>
          <div className="col-span-7 grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/careers/whatgoeson/sixth.png"
                alt="Small Image 1"
                width={200}
                height={150}
                className="w-full h-[200px] object-cover rounded"
              />
            </div>
            <div>
              <Image
                src="/careers/whatgoeson/first.png"
                alt="Small Image 2"
                width={200}
                height={150}
                className="w-full h-[200px] object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
