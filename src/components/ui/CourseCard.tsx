import Link from "next/link";
import type { GolfCourse } from "@/types";
import { getRegion } from "@/data/regions";

export default function CourseCard({ course }: { course: GolfCourse }) {
  const region = getRegion(course.regionSlug);
  return (
    <Link
      href={`/course/${course.slug}`}
      className="group flex flex-col rounded-xl border border-green-100 bg-white p-5 transition hover:border-green-300 hover:shadow-md"
    >
      <div className="flex items-center gap-2 text-xs font-medium text-green-600">
        <span className="rounded-full bg-green-50 px-2 py-0.5">{region?.name}</span>
        <span className="rounded-full bg-green-50 px-2 py-0.5">{course.type}</span>
        {course.holes > 0 && (
          <span className="rounded-full bg-green-50 px-2 py-0.5">{course.holes}홀</span>
        )}
      </div>

      <h3 className="mt-3 text-lg font-bold text-green-900 group-hover:text-green-600">
        {course.name}
      </h3>
      <p className="mt-1 text-sm text-green-900/60">{course.city} · {course.address}</p>

      <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-green-900/80">
        {course.description}
      </p>

      {course.greenFeeWeekday && (
        <p className="mt-4 text-sm text-green-900/70">
          평일 그린피 <span className="font-bold text-green-700">{course.greenFeeWeekday.toLocaleString()}원~</span>
        </p>
      )}
    </Link>
  );
}
