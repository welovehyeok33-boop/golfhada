import Link from "next/link";
import type { GolfCourse } from "@/types";
import { getRegion } from "@/data/regions";
import { getCourseNote } from "@/data/courseNotes";

export default function CourseCard({ course }: { course: GolfCourse }) {
  const region = getRegion(course.regionSlug);
  const note = getCourseNote(course.slug);
  return (
    <Link
      href={`/course/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-green-100 bg-white transition hover:border-green-300 hover:shadow-md"
    >
      <div className="h-1.5 bg-gradient-to-r from-green-500 to-green-700" />

      <div className="flex flex-1 flex-col p-5">
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

        {note ? (
          <div className="mt-3 flex-1 rounded-lg bg-green-50/70 px-3 py-2.5">
            <p className="text-xs font-semibold text-green-700">이런 분께 추천</p>
            <p className="mt-0.5 line-clamp-2 text-sm leading-relaxed text-green-900/80">
              {note.recommendedFor}
            </p>
          </div>
        ) : (
          <div className="mt-3 flex-1">
            <p className="line-clamp-2 text-sm leading-relaxed text-green-900/80">
              {course.description}
            </p>
          </div>
        )}

        {course.greenFeeWeekday && (
          <p className="mt-4 text-sm text-green-900/70">
            평일 그린피 <span className="font-bold text-green-700">{course.greenFeeWeekday.toLocaleString()}원~</span>
          </p>
        )}
      </div>
    </Link>
  );
}
