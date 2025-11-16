"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/shared/lib/utils";
import prelaunchFormSchema from "@/shared/validations";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { useEffect } from "react";
import { resetPrelaunchState, submitEarlyAccessForm } from "@/features/prelaunch/data/prelaunchSlice";

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
};

export default function PrelaunchForm() {
  const dispatch = useAppDispatch();
  const { loading, success, error } = useAppSelector((state) => state.preLaunch);

  const form = useForm<FormValues>({
    resolver: zodResolver(prelaunchFormSchema),
    defaultValues: { name: "", email: "", phoneNumber: "" },
  });

  const onSubmit = async (values: FormValues) => {
    await dispatch(submitEarlyAccessForm(values));
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => dispatch(resetPrelaunchState()), 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error, dispatch]);

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-orange-500/10 to-amber-400/5 border border-orange-400/30 
                   rounded-2xl p-6 text-center shadow-lg backdrop-blur-sm"
      >
        <h3 className="text-xl font-semibold text-orange-300 mb-2">
          🎉 You’re on the early access list!
        </h3>
        <p className="text-gray-300 text-sm">
          We’ll reach out soon with your invite and exclusive founder perks.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={form.handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-5 w-full max-w-md mx-auto bg-gray-900/50 p-6 rounded-2xl 
                 border border-gray-800 shadow-[0_0_40px_rgba(255,165,0,0.05)] backdrop-blur-sm"
    >
      <div className="space-y-3">
        <Input
          placeholder="Full Name"
          {...form.register("name")}
          className={cn(
            "bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 rounded-xl py-5"
          )}
        />
        {form.formState.errors.name && (
          <p className="text-red-400 text-xs">{form.formState.errors.name.message}</p>
        )}

        <Input
          placeholder="you@example.com"
          type="email"
          {...form.register("email")}
          className={cn(
            "bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 rounded-xl py-5"
          )}
        />
        {form.formState.errors.email && (
          <p className="text-red-400 text-xs">{form.formState.errors.email.message}</p>
        )}

        <Input
          placeholder="+91 9876543210"
          {...form.register("phoneNumber")}
          className={cn(
            "bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 rounded-xl py-5"
          )}
        />
        {form.formState.errors.phoneNumber && (
          <p className="text-red-400 text-xs">{form.formState.errors.phoneNumber.message}</p>
        )}
      </div>

      <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.02 }}>
        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className={cn(
            "w-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 text-black font-semibold rounded-xl py-6",
            "hover:shadow-[0_0_25px_rgba(255,165,0,0.5)] transition-all duration-300",
            loading && "opacity-70 cursor-not-allowed"
          )}
        >
          {loading ? "Joining..." : "Join Early Access 🚀"}
        </Button>
      </motion.div>

      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 text-sm text-center mt-2"
        >
          ⚠️ {error}
        </motion.p>
      )}

      {/* <p className="text-gray-500 text-xs text-center">
        🔒 We respect your privacy. No spam — ever.
      </p> */}
    </motion.form>
  );
}
